import { CharactersQuery } from '../../generated/types'
import { useInfiniteQuery } from 'react-query'
import { fetchCharacters } from './Character.api'

const STATE_TIME = 1000 * 60 * 5

const useCharacters = (page: number) => {
  return useInfiniteQuery<CharactersQuery>(
    'characters',
    async ({ pageParam = page }) => await fetchCharacters(pageParam),
    {
      staleTime: STATE_TIME,
      getPreviousPageParam: (firstPage) =>
        firstPage.characters?.info?.prev ?? false,
      getNextPageParam: (lastPage) => lastPage.characters?.info?.next ?? false,
    }
  )
}

export default useCharacters
