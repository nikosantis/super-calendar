import { useReducer, useContext, createContext } from 'react'
import { DateTime } from 'luxon'
import { weekOf, viewOfInterval } from './era'

const initialState = {
  view: 'month',
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

const WorkCalendarStateContext = createContext()
const WorkCalendarDispatchContext = createContext()

function WorkCalendarProvider (props) {
  const [state, set] = useCalendar()

  return (
    <WorkCalendarStateContext.Provider value={state}>
      <WorkCalendarDispatchContext.Provider value={set} {...props} />
    </WorkCalendarStateContext.Provider>
  )
}

function useWorkCalendarState () {
  const context = useContext(WorkCalendarStateContext)
  if (typeof context === 'undefined') {
    throw new Error('useWorkCalendarState must be used within a WorkCalendarProvider')
  }
  return context
}

function useWorkCalendarDispatch () {
  const context = useContext(WorkCalendarDispatchContext)
  if (typeof context === 'undefined') {
    throw new Error('useWorkCalendarDispatch must be used within a WorkCalendarProvider')
  }
  return context
}

export {
  WorkCalendarProvider,
  useWorkCalendarState,
  useWorkCalendarDispatch
}
