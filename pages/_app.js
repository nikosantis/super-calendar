import baseStyles from '../styles/base'
import fonts from '../styles/fonts'
import { CalendarProvider } from '../components/calendar-context'

function MyApp ({ Component, pageProps }) {
  return (
    <CalendarProvider>
      <Component {...pageProps} />
      <style jsx global>
        {fonts}
      </style>
      <style jsx global>
        {baseStyles}
      </style>
    </CalendarProvider>
  )
}

export default MyApp
