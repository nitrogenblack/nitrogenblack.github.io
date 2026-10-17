;(function () {
  var host = window.location.hostname
  var portalUrl = window.SITE_CONFIG.portalUrl

  if (host === 'localhost' || host === '127.0.0.1') {
    portalUrl = 'http://portal.localhost:8080'
  }

  document.getElementById('login-link').href = portalUrl
  document.getElementById('footer-year').textContent = String(
    new Date().getFullYear(),
  )
})()
