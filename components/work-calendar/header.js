import Title from './title'
import WorkCalendarNav from './nav'

export default function WorkCalendarHeader ({ view, datetime, set, interval }) {
  return (
    <header>
      <div />
      <Title datetime={datetime} />
      <WorkCalendarNav
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
