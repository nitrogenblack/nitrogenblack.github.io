;(function () {
  var host = window.location.hostname
  var cfg = window.SITE_CONFIG || {}

  var portalUrl = cfg.portalUrl
  if (host === 'localhost' || host === '127.0.0.1') {
    portalUrl = 'http://portal.localhost:8080'
  }

  var loginCfg = {
    portalUrl: portalUrl,
    casdoorPublicUrl: cfg.casdoorPublicUrl || 'http://auth.localhost:8080',
    casdoorClientId: cfg.casdoorClientId || 'portal-dev-client-id',
  }

  var loginHref =
    typeof window.buildCasdoorLoginUrl === 'function'
      ? window.buildCasdoorLoginUrl(loginCfg)
      : portalUrl

  document.getElementById('login-link').href = loginHref
  document.getElementById('footer-year').textContent = String(
    new Date().getFullYear(),
  )
})()
