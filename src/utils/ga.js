export function logPageview() {
  if (typeof window.ga !== 'function') return

  window.ga('send', 'pageview')
}

export function logEvent({
  eventCategory,
  eventAction,
  eventLabel,
  eventValue,
}) {
  if (typeof window.ga !== 'function') return

  window.ga('send', 'event', eventCategory, eventAction, eventLabel, eventValue)
}
