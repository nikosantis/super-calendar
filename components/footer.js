export default function Footer () {
  return (
    <footer>
      <div>
        <p>Created by Nikolas Santis</p>
      </div>
      <style jsx>
        {`
          footer {
            display: flex;
            justify-content: center;
            padding: 5px 0;
            background-color: var(--atteend-fg);
          }

          p {
            color: var(--atteend-primary-bg);
            font-size: 0.875rem;
          }
        `}
      </style>
    </footer>
  )
}
