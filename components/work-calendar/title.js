export default function Title ({ datetime }) {
  return (
    <div className='title'>
      <span className='month'>
        {datetime.toLocaleString({ month: 'long' })}
      </span>
      {' '}
      <span>{datetime.year}</span>
      <style jsx>
        {`
          .title {
            font-size: 24px;
            font-weight: 100;
            text-align:center;
          }

          .month {
            font-weight: 700;
          }
        `}
      </style>
    </div>
  )
}
