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

  function casdoorAuthorizeUrl(cfg) {
    var casdoor = trimSlash(cfg.casdoorPublicUrl)
    var portal = trimSlash(cfg.portalUrl)
    var clientId = cfg.casdoorClientId
    if (!casdoor || !portal || !clientId) {
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

    return casdoor + '/login/oauth/authorize?' + params.toString()
  }

  global.buildCasdoorLoginUrl = casdoorAuthorizeUrl
})(window)
