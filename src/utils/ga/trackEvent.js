export default function trackEvent({
  eventCategory,
  eventAction,
  eventLabel,
  ...options
}) {
  if (typeof window.ga !== 'function') return

  window.ga('send', {
    hitType: 'event',
    eventCategory,
    eventAction,
    eventLabel,
    ...options,
  })
}
