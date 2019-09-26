export function logPageview() {
  if (typeof window.dataLayer !== 'function') return

  window.dataLayer.push({
    event: 'trackPageview',
  })
}

export function logEvent({ dlCategory, dlAction, dlLabel, dlValue }) {
  if (typeof window.dataLayer !== 'object') return

  window.dataLayer.push({
    event: 'trackEvent',
    dlCategory,
    dlAction,
    dlLabel,
    ...(!!dlValue ? { dlValue } : {}),
  })
}
