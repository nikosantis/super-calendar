import { DateTime } from 'luxon'
import cx from 'classnames'
import { viewOfDays } from '../../lib/era'
import DayEvents from './day-events'
import DayHoliday from './day-holiday'

export default function CalendarMonth ({ datetime, setDatetime, holidays, events }) {
  const days = viewOfDays(datetime, 'month')
  return (
    <div className='month'>
      <div className='days'>
        {days.map((day, index) => {
          const weekday = day.start.weekday
          const isToday = day.contains(DateTime.local())
          const isActive = day.contains(datetime)

          const isHoliday = holidays.some(holiday => day.contains(DateTime.fromISO(holiday.date)))
          const holidayDate = isHoliday && holidays.filter(holiday => DateTime.fromISO(holiday.date).ts === day.start.ts)

          const gridColumn = index === 0 ? (weekday === 1 ? 0 : weekday + 1) : undefined

          return (
            <Day
              key={index}
              day={day}
              datetime={datetime}
              gridColumn={gridColumn}
              isActive={isActive}
              isToday={isToday}
              weekday={weekday}
              events={events}
              isHoliday={isHoliday}
              holidayDate={holidayDate}
            />
          )
        })}
      </div>
      <style jsx>
        {`
          .month {
            display: flex;
            flex: 1;
            background: var(--atteend-primary-bg);
            border-top: 1px solid var(--atteend-primary-border);
          }
          .days {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-template-rows: repeat(6, 1fr);
            font-size: 12px;
            flex: 1;
            border-collapse: collapse;
            border-right: 1px solid var(--atteend-primary-border);
          }
        `}
      </style>
    </div>
  )
}

function Day ({ day, datetime, onClick, gridColumn, isToday, isActive, weekday, isHoliday, holidayDate, events }) {
  return (
    <div
      className='day'
      onClick={onClick}
    >
      <span className={
        cx('decoration', {
          'decoration-today': isToday,
          'decoration-active': isActive,
          'decoration-weekday': weekday > 5,
          'decoration-padded-month': day.start.month !== datetime.month
        })
      }
      >
        <span className={
          cx('date', {
            'date-today': isToday,
            'date-active': isActive,
            'date-padded-month': day.start.month !== datetime.month
          })
        }
        >
          {day.start.day}
        </span>
      </span>

      <DayEvents datetime={datetime} events={events} />
      <DayHoliday datetime={datetime} isHoliday={isHoliday} holidayDate={holidayDate} />

      <style jsx>
        {`
          .day {
            background: transparent;
            border: none;
            font-weight: 500;
            display: flex;
            padding: 4px;
            position: relative;
            user-select: none;
            position: relative;
            border-left: 1px solid var(--atteend-primary-border);
            border-bottom: 1px solid var(--atteend-primary-border);
            ${gridColumn ? `grid-column: ${gridColumn};` : ''}

            &:focus {
              z-index: 1;
            }
          }
          .decoration {
            border: 1px solid transparent;
            display: flex;
            justify-content: flex-end;
            padding: 0.5rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            &:hover {
              background-color: var(--atteend-secondary-bg);
              border-radius: 2px;
              color: var(--atteend-primary-accent);
              border: 1px solid transparent;
            }
            &-today {
              color: var(--atteend-primary-accent);
            }
            &-active, &-active:hover {
              background: transparent;
            }
            &-weekday {
              background: var(--atteend-secondary-bg);
            }
            &-padded-month {
              color: var(--atteend-primary-text);
            }
          }
          .date {
            border-radius: 50%;
            border: 2px solid transparent;
            color: var(--atteend-primary-text);
            width: 30px;
            height: 30px;
            display: inline-flex;
            justify-content: center;
            align-items: center;

            &-today {
              border: 2px solid var(--atteend-primary-accent);
              color: var(--atteend-primary-accent);
              background: transparent;
            }
            &-active {
              background-color: var(--atteend-primary-accent);
              color: #fff;
            }
            &-padded-month {
              color: var(--atteend-secondary-text);
            }
          }
        `}
      </style>
    </div>
  )
}
