export function logPageview() {
  if (typeof window.ga !== 'function') return

  window.ga('send', 'pageview')
}
