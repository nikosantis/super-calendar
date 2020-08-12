import { useCalendarState, useCalendarDispatch } from '../../lib/calendar-context'
import { useHolidaysState } from '../../lib/holidays-context'
import { useEventsState } from '../../lib/events-context'
import CalendarMonth from './month'
import CalendarDays from './days'
import CalendarHeader from './header'
import CalendarYear from './year'

export default function Calendar () {
  const { view, datetime, interval } = useCalendarState()
  const holidays = useHolidaysState()
  const events = useEventsState()
  const set = useCalendarDispatch()

  return (
    <div className='calendar'>
      <div className='wrapper'>
        <CalendarHeader
          view={view}
          datetime={datetime}
          set={set}
          interval={interval}
        />
        {['day', 'week'].includes(view) && (
          <CalendarDays
            view={view}
            datetime={datetime}
            setDatetime={set.datetime}
          />
        )}
        {view === 'month' && (
          <CalendarMonth datetime={datetime} setDatetime={set.datetime} holidays={holidays} events={events} />
        )}
        {view === 'year' && (
          <CalendarYear datetime={datetime} setDatetime={set.datetime} />
        )}
      </div>

      <style jsx>
        {`
          .calendar {
            display: grid;
            background: var(--atteend-primary-bg);
          }
          .wrapper {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  )
}
