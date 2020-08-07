export function formatWeekday ({ day, options = { weekday: 'short' } }) {
  if (day.day === 1) return day.monthShort
  return day.toLocaleString(options)
}
