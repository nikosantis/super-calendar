import { viewOfDays } from '../../lib/era'
import CalendarDay from './day'
import CalendarTimeZones from './time-zones'

export default function CalendarDays ({ view, datetime, setDatetime }) {
  const days = viewOfDays(datetime, view)

  return (
    <div className='days'>
      <CalendarTimeZones datetime={datetime} />
      <div className='wrapper'>
        {days.map(day => (
          <CalendarDay
            key={day.toISO()}
            day={day}
            datetime={datetime}
            setDatetime={setDatetime}
          />
        ))}
      </div>
      <style jsx>
        {`
          .days {
            display: grid;
            grid-template-columns: 60px 1fr;
          }

          .wrapper {
            display: grid;
            grid-template-columns: ${`repeat(${days.length}, 1fr)`};
          }
        `}
      </style>
    </div>
  )
}
