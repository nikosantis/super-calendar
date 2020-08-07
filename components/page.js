export default function Page ({ children }) {
  return (
    <div>
      {children}
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
            color: var(--atteend-primary-text);
            background-color: var(--atteend-primary-bg);
            font-style: normal;
            font-weight: 500;
            font-family: var(--font-family-sans-serif);
          }
          *, ::after, ::before {
            box-sizing: border-box;
          }
          button:hover {
            cursor: pointer;
          }

          button:focus {
            outline-color: var(--atteend-primary-accent);
          }
        `}
      </style>
    </div>
  )
}
