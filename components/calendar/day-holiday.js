export default function DayHoliday ({ isHoliday, holidayDate }) {
  console.log(holidayDate)
  return (
    <div className='holiday'>
      {isHoliday && (
        <div className='active'>
          <div className='bg' />
        </div>
      )}
      {holidayDate && (
        <div className='date'>
          <span className='badge badge-success'>Feriado</span> {holidayDate[0].title.substring(0, 10)} ...
        </div>
      )}
      <style jsx>
        {`
          .holiday {
            & .active {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;

              & .bg {
                background: var(--ateend-holiday-bg);
                opacity: 0.3;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
              }
            }

            .date {
              position: absolute;
              bottom: 5px;
              text-align: left;
            }
          }
        `}
      </style>
    </div>
  )
}
