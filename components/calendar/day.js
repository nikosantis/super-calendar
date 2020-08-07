import { Duration } from 'luxon'
import cx from 'classnames'
import { viewOfInterval, isToday, isWeekend } from '../../lib/era'
import { formatWeekday } from '../../lib/formatWeekday'
import { formatDayNumber } from '../../lib/formatDayNumber'

export default function CalendarDay ({ datetime, setDatetime, day }) {
  let segments = viewOfInterval(day.start, 'day').splitBy(
    Duration.fromObject({ minutes: 30 })
  )
  if (segments.length !== 48) {
    segments = viewOfInterval(day.start.minus({ days: 2 }), 'day').splitBy(
      Duration.fromObject({ minutes: 30 })
    )
  }
  const dayName = formatWeekday({ day: day.start })
  const dayNumber = formatDayNumber({ day: day.start })
  const className = cx('day', {
    'day-today': isToday(day.start),
    'day-weekend': isWeekend(day.start),
    'day-highlight': day.contains(datetime)
  })
  function handleClick () {
    setDatetime(day.start)
  }

  return (
    <div className={className}>
      <button className='day-header' onClick={handleClick}>
        <div>{dayName}</div>
        <div className='day-number'>{dayNumber}</div>
      </button>
      {segments.map((segment, index) => (
        <div key={index} className='day-segment' />
      ))}

      <style jsx>
        {`
          .day {
            display: flex;
            flex: 1;
            flex-direction: column;

            &-today {
              font-weight: 900;

              .day-number {
                color: var(--atteend-primary-accent);
                border: 2px solid var(--atteend-primary-accent);
                border-radius: 50%;
              }
            }

            &-weekend, &-segment {
              background: var(--atteend-secondary-bg);
            }

            &-highlight {
              background-color: var(--atteend-highlight);
              z-index: 2;

              .day-header {
                z-index: 2;
                border-bottom: 2px solid var(--atteend-primary-accent);
              }

              .day-number {
                color: #fff;
                background-color: var(--atteend-primary-accent);
                border-radius: 50%;
              }
            }

            &-header {
              border: none;
              border-bottom: 2px solid var(--atteend-primary-border);
              display: flex;
              flex: 1;
              padding: 0.5rem 0;
              align-items: center;
              justify-content: center;
              flex-direction: row;
              background: transparent;
              font-size: 16px;
              color: var(--atteend-primary-text);
              position: sticky;
              top: 59px;
              height: 48px;
              background-color: var(--atteend-primary-bg);
            }

            &-number {
              width: 30px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-left: 2px;
            }

            &-segment {
              height: 30px;
              background-color: var(--atteend-primary-bg);
              border-left: 1px solid var(--atteend-primary-border);
              border-bottom: 1px solid var(--atteend-primary-border);
            }
          }
        `}
      </style>
    </div>
  )
}
