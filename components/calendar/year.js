import { viewOfInterval, splitByUnit } from '../../lib/era'
import CalendarMiniMonth from './mini-month'

export default function CalendarYear ({ datetime, setDatetime }) {
  const interval = viewOfInterval(datetime, 'year')
  const months = splitByUnit(interval, 'months')

  return (
    <div className='year'>
      {months.map(month => (
        <CalendarMiniMonth
          key={month.start.toISO()}
          month={month}
          interval={viewOfInterval(datetime, 'day')}
          setDatetime={setDatetime}
        />
      ))}

      <style jsx>
        {`
          .year {
            background: var(--atteend-primary-bg);
            display: grid;
            grid-template-rows: repeat(3, 212px);
            grid-template-columns: repeat(4, 235.5px);
            flex: 1;
            grid-gap: 1rem;
            justify-content: center;
            align-content: center;
            border-top: 1px solid var(--atteend-primary-border);
            padding: 1rem 0;
          }
        `}
      </style>
    </div>
  )
}
