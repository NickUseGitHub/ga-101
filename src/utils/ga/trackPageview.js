export default function trackEvent({
  eventCategory,
  eventAction,
  eventLabel,
  ...options
}) {
  if (typeof window.dataLayer === 'undefined') return

  window.dataLayer.push({
    event: 'trackPageview',
    eventCategory,
    eventAction,
    eventLabel,
    ...options,
  })
}
