import { useReducer, useContext, createContext } from 'react'
import { DateTime } from 'luxon'
import { weekOf, viewOfInterval } from './era'

const initialState = {
  view: 'week',
  datetime: DateTime.local().setZone('local'),
  interval: weekOf(DateTime.local().setZone('local'))
}

const SET_VIEW = 'SET_VIEW'
const SET_DATETIME = 'SET_DATETIME'

function reducer (state, action) {
  switch (action.type) {
    case SET_VIEW: {
      return {
        ...state,
        view: action.payload,
        interval: viewOfInterval(state.datetime, action.payload)
      }
    }
    case SET_DATETIME: {
      return {
        ...state,
        datetime: action.payload,
        interval: viewOfInterval(action.payload, state.view)
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function useCalendar () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const set = {
    view: (payload) => dispatch({ type: SET_VIEW, payload }),
    datetime: (payload) => dispatch({ type: SET_DATETIME, payload })
  }

  return [state, set]
}

const CalendarStateContext = createContext()
const CalendarDispatchContext = createContext()

function CalendarProvider (props) {
  const [state, set] = useCalendar()

  return (
    <CalendarStateContext.Provider value={state}>
      <CalendarDispatchContext.Provider value={set} {...props} />
    </CalendarStateContext.Provider>
  )
}

function useCalendarState () {
  const context = useContext(CalendarStateContext)
  if (typeof context === 'undefined') {
    throw new Error('useCalendarState must be used within a CalendarProvider')
  }
  return context
}

function useCalendarDispatch () {
  const context = useContext(CalendarDispatchContext)
  if (typeof context === 'undefined') {
    throw new Error('useCalendarDispatch must be used within a CalendarProvider')
  }
  return context
}

export {
  CalendarProvider,
  useCalendarState,
  useCalendarDispatch
}
