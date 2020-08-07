import { DateTime } from 'luxon'
import { splitByUnit, dayOf } from '../../lib/era'

export default function CalendarTimeZones ({ datetime }) {
  return (
    <>
      {['local'].map(timezone => {
        const now = DateTime.local()
        let segments = splitByUnit(dayOf(DateTime.local()), 'hour')

        if (segments.length !== 48) {
          segments = splitByUnit(
            dayOf(DateTime.local().minus({ days: 2 })),
            'hour'
          )
        }

        return (
          <div className='timezone' key={timezone}>
            <div className='day-header'>
              <small>{now.toFormat('ZZZZ')}</small>
            </div>
            {segments.map(segment => {
              const time = segment.start
              return (
                <div key={time.toISO()} className='time'>
                  {time.toLocaleString({
                    hour: 'numeric',
                    hour12: true
                  })}
                </div>
              )
            })}
          </div>
        )
      })}

      <style jsx>
        {`
          .day-header {
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
          .timezone {
            display: grid;
            grid-template-rows: auto repeat(24, 60px);

            .day-header {
              align-items: flex-end;
              justify-content: flex-end;
              padding-right: 0.25rem;
            }

            &:first-child .time {
              border-right: 1px solid var(--atteend-primary-border);
            }

            .time {
              font-size: 12px;
              text-align: right;
              padding-right: 0.25rem;
              border-bottom: 1px solid var(--atteend-primary-border);
            }
          }
        `}
      </style>
    </>
  )
}
