import Head from 'next/head'
import Page from '../components/page'
import Calendar from '../components/calendar'
import useMounted from '../components/use-mounted'
import Footer from '../components/footer'
import PreCalendar from '../components/pre-calendar'
import { CalendarProvider } from '../lib/calendar-context'
import { HolidaysProvider } from '../lib/holidays-context'
import { EventsProvider } from '../lib/events-context'

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
          <div className='col mb-5'>
            <CalendarProvider>
              <HolidaysProvider>
                <EventsProvider>
                  {mounted ? <Calendar /> : <PreCalendar />}
                </EventsProvider>
              </HolidaysProvider>
            </CalendarProvider>
          </div>
        </div>
      </div>

      <Footer />

    </Page>
  )
}
