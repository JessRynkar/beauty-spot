import { MEDIA } from './media'

export const SERVICES = `
  query Services {
    Services(limit: 300) {
      docs {
        category
      }
    }
  }
`

export const SERVICE = `
  query Service($category: String ) {
    Services(where: { category: { equals: $category}}) {
      docs {
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
  }
`
