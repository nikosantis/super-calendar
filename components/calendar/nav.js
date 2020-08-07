import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { today } from '../../lib/era'
import ButtonGroup from '../button-group'
import ButtonGroupOption from '../button-options'

export default function CalendarNav ({ view, datetime, setDatetime }) {
  function prev () {
    setDatetime(datetime.minus({ [view]: 1 }))
  }
  function next () {
    setDatetime(datetime.plus({ [view]: 1 }))
  }
  function goToday () {
    setDatetime(today().start.startOf('day'))
  }

  return (
    <nav>
      <ButtonGroup>
        <ButtonGroupOption onClick={prev}>
          <FiArrowLeft fontSize='11' />
        </ButtonGroupOption>
        <ButtonGroupOption onClick={goToday} bordered>
          Today
        </ButtonGroupOption>
        <ButtonGroupOption onClick={next}>
          <FiArrowRight fontSize='11' />
        </ButtonGroupOption>
      </ButtonGroup>

      <style jsx>
        {`
          nav {
            display: flex;
            justify-content: flex-end;
          }
        `}
      </style>
    </nav>
  )
}
