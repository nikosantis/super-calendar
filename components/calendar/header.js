import Title from './title'
import CalendarViewSelect from './view-select'
import CalendarNav from './nav'

export default function CalendarHeader ({ view, datetime, set, interval }) {
  return (
    <header>
      <Title view={view} datetime={datetime} />

      <CalendarViewSelect view={view} setView={set.view} />
      <CalendarNav
        interval={interval}
        view={view}
        datetime={datetime}
        setDatetime={set.datetime}
      />

      <style jsx>
        {`
          header {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 3;
            background-color: var(--atteend-primary-bg);
          }
        `}
      </style>
    </header>
  )
}
