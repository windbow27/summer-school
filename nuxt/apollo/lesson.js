export const queryLesson = gql`
query ($id: ID!) {
      lesson(id: $id) {
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