import axios from 'axios'
import { print, DocumentNode } from 'graphql'

// To fix nested data object: response.data.data
axios.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

// You can put it in .env
const endpoint = 'https://rickandmortyapi.com/graphql'

/**
 * We have to use POST method here.
 * @param query - generated DocumentNode by 'yarn graphql:codegen'
 * @param variables - query params
 * @returns Promise<T>
 */
export const fetcher = <T>(
  query: DocumentNode,
  variables: Record<string, string> = {}
): Promise<T> => {
  return new Promise<T>((resolve, reject) => {
    axios
      .post<T>(endpoint, { query: print(query), variables })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error))
  })
}
