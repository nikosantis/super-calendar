import '../styles/bootstrap.css'
import baseStyles from '../styles/base'
import fonts from '../styles/fonts'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {fonts}
      </style>
      <style jsx global>
        {baseStyles}
      </style>
    </>
  )
}

export default MyApp
