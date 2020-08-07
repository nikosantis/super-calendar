import css from 'styled-jsx/css'

export default css.global`
  :root {
    --atteend-primary-bg: #fff;
    --atteend-fg: #6c757d;
    --atteend-primary-color: #0c8;
    --atteend-primary-color-hover: #00BA7C;
    --atteend-primary-border: lightgray;
    --atteend-secondary-border: var(--atteend-primary-bg);
    --atteend-primary-border-size: 1px;
    --atteend-primary-accent: #0c8;
    --atteend-primary-text: #202020;
    --atteend-primary-button: #f7f7f7;
    --atteend-secondary-bg: #efefef;
    --atteend-secondary-text: #9fa4ad;
    --atteend-shadow-opacity: 0.2;
    --atteend-focus-color: rgba(0, 0, 0, 0.1);
    --atteend-timezone-width: 45px;
    --atteend-day-header-height: 50px;
    --atteend-day-height: calc(calc(100vw - 40px) / 21);
    --atteend-highlight: #fefae3;

    /* Fonts */
    --font-family-sans-serif: "Roboto", -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
`
