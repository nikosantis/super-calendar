import {
  DateTime,
  Interval,
  Duration
} from 'luxon'

export function unitDuration (unit) {
  return Duration.fromObject({ [unit]: 1 })
}

export function unitInterval (datetime, unit) {
  return Interval.fromDateTimes(datetime.startOf(unit), datetime.endOf(unit))
}

export function unitOffsetInterval (datetime, duration) {
  const [[unit, count]] = Object.entries(duration)
  const start =
    count < 0 ? datetime.minus({ [unit]: Math.abs(count) }) : datetime
  const end = count < 0 ? datetime : datetime.plus({ [unit]: count })
  return Interval.fromDateTimes(
    start.startOf(unit),
    end.endOf(unit)
  )
}

export function dayOf (datetime) {
  return unitInterval(datetime, 'day')
}

export function weekOf (datetime) {
  let interval = unitInterval(datetime, 'week')
  if (datetime.weekday === 7) {
    interval = unitInterval(datetime.plus(unitDuration('week')), 'week')
  }
  return interval.mapEndpoints(datetime => datetime)
}

export function monthOf (datetime) {
  return unitInterval(datetime, 'month')
}

export function paddedMonthOf (datetime, { daysPerWeek = 7, weeksPerMonth = 6 }) {
  const month = monthOf(datetime)

  const prevStart = month.start.minus({ days: month.start.weekday - 1 })
  const prevEnd = month.start.minus({ days: 1 }).endOf('day')
  const prevMonthInterval = Interval.fromDateTimes(prevStart, prevEnd)

  const prevDays =
  month.start.weekday === 1
    ? 0
    : Math.round(intervalDuration(prevMonthInterval, 'days'))
  const monthDays = Math.round(intervalDuration(month, 'days'))
  const nextDays = daysPerWeek * weeksPerMonth - (prevDays + monthDays)
  const nextEnd = month.end.plus({ days: nextDays }).endOf('day')

  if (month.start.weekday === 1) {
    return Interval.fromDateTimes(month.start, nextEnd)
  }
  return Interval.fromDateTimes(prevStart, nextEnd)
}

export function yearOf (datetime) {
  return unitInterval(datetime, 'year')
}

export function splitByUnit (interval, unit) {
  return interval.splitBy(unitDuration(unit))
}

export function numUnit (interval, unit) {
  return splitByUnit(interval, unit).length
}

export function intervalDuration (interval, unit) {
  return interval.toDuration().as(unit)
}

export function viewOfInterval (datetime, view) {
  switch (view) {
    case 'day':
    case 'days':
      return dayOf(datetime)
    case 'week':
    case 'weeks':
      return weekOf(datetime)
    case 'month':
    case 'months':
      return paddedMonthOf(datetime, { daysPerWeek: 7, weeksPerMonth: 6 })
    case 'year':
    case 'years':
      return yearOf(datetime)
    case 'work':
      return monthOf(datetime)
    default:
      return dayOf(datetime)
  }
}

export function viewOfDays (datetime, view) {
  return splitByUnit(viewOfInterval(datetime, view), 'days')
}

export function nextUnitInterval (interval, duration) {
  return interval.mapEndpoints(datetime => datetime.plus(duration))
}

export function previousUnitInterval (interval, duration) {
  return interval.mapEndpoints(datetime => datetime.minus(duration))
}

export function now (timezone = 'local') {
  return DateTime.local().setZone(timezone)
}

export function today (timezone = 'local') {
  return dayOf(now(timezone))
}

export function yesterday (timezone = 'local') {
  return previousUnitInterval(today(timezone), { days: 1 })
}

export function thisWeek (timezone = 'local') {
  return weekOf(now(timezone))
}

export function lastWeek (timezone = 'local') {
  return previousUnitInterval(thisWeek(timezone), { weeks: 1 })
}

export function isToday (datetime, timezone = 'local') {
  return today(timezone).contains(datetime)
}

export function isFuture (datetime) {
  return datetime.diffNow().milliseconds > 0
}

export function isPast (datetime) {
  return !isFuture(datetime)
}

export function isWeekend (datetime) {
  return datetime.weekday > 5
}
