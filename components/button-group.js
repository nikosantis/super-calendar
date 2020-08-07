export default function ButtonGroup ({ children }) {
  return (
    <div className='buttongroup' role='group'>
      {children}
      <style jsx>
        {`
          .buttongroup {
            background: var(--atteend-primary-button);
            color: var(--atteend-primary-text);
            border-radius: 4px;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            padding: 1px;
          }
        `}
      </style>
    </div>
  )
}
