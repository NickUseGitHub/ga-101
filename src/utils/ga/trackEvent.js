export default function trackEvent({
  eventCategory,
  eventAction,
  eventLabel,
  ...options
}) {
  if (typeof ga !== 'function') return

  ga('send', 'event', eventCategory, eventAction, eventLabel, ...options)
}
