export default function Title ({ view, datetime }) {
  return (
    <div className='title'>
      {view !== 'year' && (
        <span className='month'>
          {datetime.toLocaleString({ month: 'long' })}
        </span>
      )}{' '}
      <span>{datetime.year}</span>
      <style jsx>
        {`
          .title {
            font-size: 24px;
            font-weight: 100;
          }

          .month {
            font-weight: 700;
          }
        `}
      </style>
    </div>
  )
}
