import Head from 'next/head'
import Page from '../components/page'
import Calendar from '../components/calendar'
import useMounted from '../components/use-mounted'
import Footer from '../components/footer'
import PreCalendar from '../components/pre-calendar'

export default function Home () {
  const mounted = useMounted()
  return (
    <Page>
      <div className='container'>
        <Head>
          <title>Super Calendar</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='row'>
          <div className='col'>
            {mounted ? <Calendar /> : <PreCalendar />}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>
        {`
          .container {
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
          }
          @media (min-width: 576px) {
            .container {
              max-width: 540px;
            }
          }
          @media (min-width: 768px) {
            .container {
              max-width: 720px;
            }
          }
          @media (min-width: 992px) {
            .container {
              max-width: 960px;
            }
          }
          @media (min-width: 1200px) {
            .container {
              max-width: 1140px;
            }
          }

          .row {
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
          }

          .col {
            position: relative;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            flex-basis: 0;
            flex-grow: 1;
            max-width: 100%;
          }
        `}
      </style>
    </Page>
  )
}
