import ButtonGroup from '../button-group'
import ButtonGroupOption from '../button-options'

const views = ['day', 'week', 'month', 'year']

export default function CalendarViewSelect ({ view, setView }) {
  return (
    <div className='calendar-view-select'>
      <ButtonGroup>
        {views.map(option => {
          function handleChange () {
            setView(option)
          }
          return (
            <ButtonGroupOption
              key={option}
              active={view === option}
              onClick={handleChange}
            >
              {option}
            </ButtonGroupOption>
          )
        })}
      </ButtonGroup>

      <style jsx>
        {`
          .calendar-view-select {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </div>
  )
}
