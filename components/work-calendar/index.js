import { useWorkCalendarState, useWorkCalendarDispatch } from '../../lib/work-calendar-context'
import WorkCalendarHeader from './header'
import WorkDays from './work-days'

export default function WorkCalendar () {
  const { view, datetime, interval } = useWorkCalendarState()
  const set = useWorkCalendarDispatch()

  return (
    <div className='work-calendar'>
      <div className='wrapper'>
        <WorkCalendarHeader
          view={view}
          datetime={datetime}
          set={set}
          interval={interval}
        />
        {view === 'month' && <WorkDays datetime={datetime} setDatetime={set.datetime} />}
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
