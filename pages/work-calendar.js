import Head from 'next/head'
import Page from '../components/page'
import WorkCalendar from '../components/work-calendar'
import useMounted from '../components/use-mounted'
import Footer from '../components/footer'
import PreCalendar from '../components/pre-calendar'
import { WorkCalendarProvider } from '../lib/work-calendar-context'
import { HolidaysProvider } from '../lib/holidays-context'
import { EventsProvider } from '../lib/events-context'

export default function Home () {
  const mounted = useMounted()
  return (
    <Page>
      <div className='container'>
        <Head>
          <title>Super Work Calendar</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className='row'>
          <div className='col mb-5'>
            <WorkCalendarProvider>
              <HolidaysProvider>
                <EventsProvider>
                  {mounted ? <WorkCalendar /> : <PreCalendar />}
                </EventsProvider>
              </HolidaysProvider>
            </WorkCalendarProvider>
          </div>
        </div>
      </div>

      <Footer />

    </Page>
  )
}
