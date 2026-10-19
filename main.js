;(function () {
  var host = window.location.hostname
  var cfg = window.SITE_CONFIG || {}

  var portalUrl = cfg.portalUrl
  var authserverPublicUrl = cfg.authserverPublicUrl
  if (host === 'localhost' || host === '127.0.0.1') {
    portalUrl = 'http://portal.localhost:8080'
    authserverPublicUrl = 'http://auth.localhost:8080'
  }

  var loginCfg = {
    portalUrl: portalUrl,
    authserverPublicUrl: authserverPublicUrl || 'http://auth.localhost:8080',
    authserverClientId: cfg.authserverClientId || 'portal-dev-client-id',
  }

  var loginHref =
    typeof window.buildAuthserverLoginUrl === 'function'
      ? window.buildAuthserverLoginUrl(loginCfg)
      : portalUrl

  document.getElementById('login-link').href = loginHref
  document.getElementById('footer-year').textContent = String(
    new Date().getFullYear(),
  )
})()
