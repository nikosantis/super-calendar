import { viewOfDays } from '../../lib/era'
import Legends from './legends'
import { formatWorkday } from '../../lib/formatWorkday'

export default function WorkDays ({ datetime, setDatetime }) {
  const days = viewOfDays(datetime, 'work')
  const gridRow = days.length
  return (
    <div className='wrapper'>
      <Legends />
      <div className='work-days'>
        <header className='header'>
          <div className='header-col'>Fecha</div>
          <div className='header-col'>Permiso</div>
          <div className='header-col'>Jornada/Turno</div>
          <div className='header-col'>Entrada</div>
          <div className='header-col'>Atraso</div>
          <div className='header-col'>Salida</div>
          <div className='header-col'>Entrada</div>
          <div className='header-col'>Atraso</div>
          <div className='header-col'>Salida</div>
          <div className='header-col'>Adelanto</div>
          <div className='header-col'>HEA</div>
          <div className='header-col'>HEC</div>
          <div className='header-col'>HNT</div>
          <div className='header-col'>HT</div>
        </header>
        <div className='days'>
          {days.map((day, index) => {
            return (
              <Day
                key={index}
                day={day}
              />
            )
          })}
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            flex: 1;
            flex-direction: column;
          }
          .work-days {
            display: flex;
            background: var(--atteend-primary-bg);
            flex-direction: column;
            border: 1px solid var(--atteend-primary-border);
          }
          .header {
            display: grid;
            grid-template-columns: 2fr 2fr 2fr repeat(11,1fr);
            grid-template-rows: 1fr;
            font-size: 12px;
            border-collapse: collapse;
            border-bottom: 1px solid var(--atteend-primary-border);

            .header-col {
              border-left: 1px solid var(--atteend-primary-border);
              text-align: center;

              &:first-child {
                border: none;
              }
            }
          }
          .days {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(${gridRow}, 1fr);
            border-collapse: collapse;
            border-bottom: 1px solid var(--atteend-primary-border);

            & > :global(.day) {
              &:last-child {
                border: none;
              }
            }
          }
        `}
      </style>
    </div>
  )
}

function Day ({ day, permission, workingDay }) {
  const dayName = formatWorkday({ day: day.start })

  return (
    <div className='day'>
      <div className='day-row'>
        <span>{dayName}</span>
      </div>
      <div className='day-row'>
        {permission ? '' : 'Ninguno'}
      </div>
      <div className='day-row'>
        {workingDay ? '' : 'No Trabaja'}
      </div>
      <div className='day-row'>
        --:--
      </div>
      <div className='day-row'>
        --:--
      </div>
      <div className='day-row'>
        --:--
      </div>
      <div className='day-row'>
        --:--
      </div>
      <div className='day-row'>
        --:--
      </div>
      <div className='day-row'>
        --:--
      </div>
      <div className='day-row'>
        --:--
      </div>
      <div className='day-row'>
        00:00
      </div>
      <div className='day-row'>
        00:00
      </div>
      <div className='day-row'>
        00:00
      </div>
      <div className='day-row'>
        00:00
      </div>
      <style jsx>
        {`
          .day {
            display: grid;
            grid-template-columns: 2fr 2fr 2fr repeat(11,1fr);
            border-bottom: 1px solid var(--atteend-primary-border);
          }

          .day-row {
            border-left: 1px solid var(--atteend-primary-border);
            text-align: center;
            color: var(--atteend-primary-text);
            font-weight: 300;
            font-size: 12px;

            &:first-child {
              border: none;
            }
          }
        `}
      </style>
    </div>
  )
}
