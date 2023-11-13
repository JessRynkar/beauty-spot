import {
  CALL_TO_ACTION,
  CONTENT,
  CONTENT_MEDIA,
  GOOGLE_MAPS,
  MEDIA_BLOCK,
  SERVICES_LIST,
} from './blocks'
import { LINK_FIELDS } from './link'
import { MEDIA } from './media'
import { META } from './meta'

export const PAGES = `
  query Pages {
    Pages(limit: 300, where: { slug: { not_equals: "cart" } })  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String ) {
    Pages(where: { AND: [{ slug: { equals: $slug }}] }) {
      docs {
        id
        title
        hero {
          type
          richText
          links {
            link ${LINK_FIELDS()}
          }
          ${MEDIA}
        }
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${CONTENT_MEDIA}
          ${GOOGLE_MAPS}
          ${MEDIA_BLOCK}
          ${SERVICES_LIST}
        }
        ${META}
      }
    }
  }
`
