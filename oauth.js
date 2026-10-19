;(function (global) {
  function trimSlash(url) {
    return String(url || '').replace(/\/+$/, '')
  }

  function randomState() {
    var bytes = new Uint8Array(16)
    crypto.getRandomValues(bytes)
    var binary = ''
    for (var i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')
  }

  function authserverAuthorizeUrl(cfg) {
    var authserver = trimSlash(cfg.authserverPublicUrl)
    var portal = trimSlash(cfg.portalUrl)
    var clientId = cfg.authserverClientId
    if (!authserver || !portal || !clientId) {
      return portal || '#'
    }

    var redirectUri = portal + '/callback'
    var params = new URLSearchParams({
      client_id: clientId,
      response_type: 'code',
      redirect_uri: redirectUri,
      scope: 'openid profile',
      state: randomState(),
    })

    return authserver + '/login/oauth/authorize?' + params.toString()
  }

  global.buildAuthserverLoginUrl = authserverAuthorizeUrl
})(window)
