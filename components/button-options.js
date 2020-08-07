import cx from 'classnames'

export default function ButtonGroupOption ({ active = false, bordered = false, onClick, children }) {
  const classNames = cx('buttongroup-option', {
    'buttongroup-option-active': active,
    'buttongroup-option-bordered': bordered
  })

  return (
    <button
      type='button'
      className={classNames}
      onClick={onClick}
    >
      {children}
      <style jsx>
        {`
          .buttongroup-option {
            padding: 4px 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: none;
            font-size: 14px;
            font-weight: 500;
            background: var(--atteend-primary-button);
            color: var(--atteend-primary-text);
            flex: 1;
            text-transform: capitalize;

            &-active, &:active,
            &:focus, &:hover {
              background: var(--atteend-primary-bg);
              color: var(--atteend-primary-accent);
              border-radius: 4px;
              box-shadow: 0 1px 3px rgba(0, 0, 0, var(--atteend-shadow-opacity));
              border-radius: 4px;
              z-index: 1;
            }

            &-bordered {
              border-left: 1px solid var(--atteend-primary-bg);
              border-right: 1px solid var(--atteend-primary-bg);
            }
          }
        `}
      </style>
    </button>
  )
}
