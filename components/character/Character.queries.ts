import { gql } from 'graphql-tag'

export const CharactersQueryDocument = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        gender
        image
        status
        species
        location {
          name
        }
        origin {
          name
        }
      }
    }
  }
`
