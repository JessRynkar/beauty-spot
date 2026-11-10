const policies = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://maps.googleapis.com', 'https://beauty-spot.payloadcms.app', 'https://*.dermis.ai', `${process.env.PAYLOAD_PUBLIC_SERVER_URL}`],
  'child-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'img-src': ["'self'", 'https://raw.githubusercontent.com', 'https://*.dermis.ai'],
  'font-src': ["'self'"],
  'frame-src': ["'self'", 'https://maps.googleapis.com', 'https://www.google.com/', 'https://*.dermis.ai'],
  'connect-src': ["'self'", 'https://maps.googleapis.com', 'https://beauty-spot.payloadcms.app', 'https://*.dermis.ai', `${process.env.PAYLOAD_PUBLIC_SERVER_URL}`],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
