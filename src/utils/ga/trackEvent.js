export default function trackEvent({
  dlCategory,
  dlAction,
  dlLabel,
  ...options
}) {
  if (typeof window.dataLayer === 'undefined') return

  window.dataLayer.push({
    event: 'trackEvent',
    dlCategory,
    dlAction,
    dlLabel,
    ...options,
  })
}
