export function formatWorkday ({ day }) {
  const dayName = day.setLocale('es-ES').toLocaleString({ weekday: 'short' })
  const dayData = day.setLocale('es-ES').toLocaleString()
  return `${dayName} ${dayData}`
}
