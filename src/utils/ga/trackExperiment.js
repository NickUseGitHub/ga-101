export default function trackExperiment() {
  if (typeof window.dataLayer === 'undefined') return

  window.dataLayer.push(arguments)
}
