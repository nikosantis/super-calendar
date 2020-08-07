export function formatDayNumber ({ day, options = { day: 'numeric' } }) {
  return day.toLocaleString(options)
}
