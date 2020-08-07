import cx from 'classnames'
import { splitByUnit, paddedMonthOf } from '../../lib/era'
import { DateTime } from 'luxon'

export default function CalendarMiniMonth ({ month, setDatetime, interval, spanMonths = false }) {
  const days = splitByUnit(
    paddedMonthOf(month.start, { daysPerWeek: 7, weeksPerMonth: 6 }),
    'days'
  )

  return (
    <div className='mini-month'>
      <header>
        {month.start.toLocaleString({
          month: 'long'
        })}
      </header>

      <div className='days'>
        {days.map((day, index) => {
          const weekday = day.start.weekday
          const isToday = day.contains(DateTime.local())
          const isPadded = day.start.month !== month.start.month
          const isInterval = interval.contains(day.start)
          const highlightDay = spanMonths ? isInterval : isInterval && !isPadded
          const gridColumn = index === 0 ? (weekday === 7 ? 0 : weekday + 1) : undefined

          function handleDayClick (dt) {
            return () => setDatetime(dt)
          }

          return (
            <MiniMonthButton
              key={day.toISO()}
              day={day}
              gridColumn={gridColumn}
              highlightDay={highlightDay}
              interval={interval}
              isPadded={isPadded}
              isToday={isToday}
              onClick={handleDayClick(day.start)}
            />
          )
        })}
      </div>

      <style jsx>
        {`
          .mini-month {
            padding: 0 1rem;
          }

          header {
            margin-bottom: 4px;
          }

          .days {
            display: grid;
            grid-template-columns: repeat(7, 30px);
            grid-template-rows: repeat(6, 30px);
            font-size: 12px;
          }
        `}
      </style>
    </div>
  )
}

function MiniMonthButton ({ gridColumn, onClick, day, interval, isToday, isPadded, highlightDay }) {
  return (
    <button
      className='day'
      onClick={onClick}
    >
      <span
        className={cx('decoration', {
          'decoration-today': isToday && !isPadded,
          'decoration-interval': highlightDay,
          'decoration-padded-month':
            isPadded && !highlightDay,
          'decoration-interval-start':
            highlightDay &&
            interval.start.equals(day.start.startOf('day')),
          'decoration-interval-end':
            highlightDay &&
            interval.end.hasSame(day.start.endOf('day'), 'day')
        })}
      >
        {day.start.day}
      </span>

      <style jsx>
        {`
          .day {
            background: transparent;
            border: none;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;
            cursor: pointer;
            position: relative;
            user-select: none;
            position: relative;
            color: var(--atteend-primary-text);
            ${gridColumn && `grid-column: ${gridColumn};`}
          }

          .decoration {
            border: 1px solid transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            &:hover {
              background-color: var(--atteend-secondary-bg);
              border-radius: 2px;
              color: var(--atteend-primary-accent);
              border-radius: 50%;
            }
          }

          .decoration-today {
            border: 2px solid var(--atteend-primary-accent);
            color: var(--atteend-primary-accent);
            border-radius: 50%;
            padding: 4px;
            line-height: 1em;
          }

          .decoration-interval, .decoration-interval:hover {
            background: var(--atteend-primary-accent);
            color: #ffffff;
            border-radius: 0;
          }
          .decoration-interval:hover {
            opacity: 0.8;
          }

          .decoration-today, .decoration-interval {
            border-radius: 0;
          }

          .decoration-interval-start,
          .decoration-today.decoration-interval-start,
          .decoration-interval-start:hover {
            border-top-left-radius: 50%;
            border-bottom-left-radius: 50%;
          }

          .decoration-interval-end,
          .decoration-today.decoration-interval-end,
          .decoration-interval-end:hover {
            border-top-right-radius: 50%;
            border-bottom-right-radius: 50%;
          }

          .decoration-padded-month {
            color: var(--atteend-secondary-text);
          }

          .decoration-interval.decoration-padded-month {
            background-color: transparent;
            color: var(--atteend-secondary-text);
          }
        `}
      </style>
    </button>
  )
}
