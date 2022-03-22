import { CharactersQuery } from '../../generated/types'
import { fetcher } from '../../utils/api-utils'
import { CharactersQueryDocument } from './Character.queries'

export const fetchCharacters = async (
  page: string
): Promise<CharactersQuery> => {
  return await fetcher<CharactersQuery>(CharactersQueryDocument, { page })
}
