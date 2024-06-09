export const queryAnnouncement = gql`
query ($id: ID!) {
      announcement(id: $id) {
        data {
          id
          attributes {
            title
            content
            publishedAt
            image {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
`