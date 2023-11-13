import { LINK_FIELDS } from './link'
import { MEDIA } from './media'

export const CALL_TO_ACTION = `
...on Cta {
  blockType
  invertBackground
  richText
  links {
    link ${LINK_FIELDS()}
  }
}
`

export const CONTENT = `
...on Content {
  blockType
  invertBackground
  columns {
    size
    richText
    enableLink
    link ${LINK_FIELDS()}
  }
}
`

export const CONTENT_MEDIA = `
...on ContentMedia {
  blockType
  content
  ${MEDIA}
  imagePosition
}
`

export const GOOGLE_MAPS = `
...on GoogleMaps {
  blockType
  ${MEDIA}
}
`

export const MEDIA_BLOCK = `
...on MediaBlock {
  blockType
  invertBackground
  position
  ${MEDIA}
}
`
export const SERVICES_LIST = `
...on ServicesList {
  blockType
  type
  service {
    category
    description
    ${MEDIA}
    freshaURL
    services {
      name
      description
      price
      duration
    }
  }
}
`
