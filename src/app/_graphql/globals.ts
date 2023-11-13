import { LINK_FIELDS } from './link'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Footer {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const FOOTER_QUERY = `
query Footer {
  ${FOOTER}
}
`

export const CONTACT = `
  Contact {
    number
    email
    address {
      line1
      line2
    }
    instagram
    facebook
  }
`

export const CONTACT_QUERY = `
query Contact {
  ${CONTACT}
}
`

export const HOURS = `
  Hours {
    days {
      fromDay
      toDay
      open
      openTime
      closeTime
    }
  }
`

export const HOURS_QUERY = `
query Hours {
  ${HOURS}
}
`
