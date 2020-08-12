import { createContext, useReducer, useContext } from 'react'

const EventsStateContext = createContext()
const EventsDispatchContext = createContext()

const INITIAL_STATE = [
  {
    title: 'nice event',
    start: new Date().getTime(),
    allDay: true
  }
]

function eventsReducer (state, action) {
  switch (action.type) {
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function EventsProvider (props) {
  const [state, dispatch] = useReducer(eventsReducer, INITIAL_STATE)

  return (
    <EventsStateContext.Provider value={state}>
      <EventsDispatchContext.Provider {...props} />
    </EventsStateContext.Provider>
  )
}

function useEventsState () {
  const context = useContext(EventsStateContext)
  if (typeof context === 'undefined') {
    throw new Error('useEventsState must be used within a EventsProvider')
  }
  return context
}

function useEventsDispatch () {
  const context = useContext(EventsDispatchContext)
  if (typeof context === 'undefined') {
    throw new Error('useEventsDispatch must be used within a EventsProvider')
  }
  return context
}

export {
  EventsProvider,
  useEventsState,
  useEventsDispatch
}
