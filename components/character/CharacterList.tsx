import React, { useMemo } from 'react'
import useCharacters from './useCharacters'
import { Character } from '../../generated/types'
import Show from '../show/Show'
import useIntersectionObserver from '../../utils/intersection-observer'
import CharacterListItem from './CharacterListItem'

const INITIAL_PAGE = 1

const CharacterList = () => {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useCharacters(INITIAL_PAGE)

  const loadMoreButtonRef = React.useRef<HTMLButtonElement>(null)
  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage,
  })

  const characters: Character[] | undefined = useMemo(() => {
    return data?.pages?.reduce((result, currentPage) => {
      return [...result, ...(currentPage?.characters?.results as Character[])]
    }, [] as Character[])
  }, [data])

  if (isLoading) return <></>
  return (
    <Show when={characters}>
      {
        <React.Fragment>
          <section className="grid max-w-6xl grid-cols-1 gap-2 mx-auto md:grid-cols-2">
            {characters?.map((item, index) => (
              <CharacterListItem item={item} key={index} />
            ))}
          </section>
          <div className="flex items-center justify-center py-4 pt-16">
            <button
              ref={loadMoreButtonRef}
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              className="px-8 py-1 border rounded-md px bg-slate-900/40 hover:bg-slate-900/50 hover:text-slate-50 border-slate-600 text-slate-300"
            >
              {isFetchingNextPage
                ? 'Loading more...'
                : hasNextPage
                ? 'Load Newer'
                : 'Nothing more to load'}
            </button>
          </div>
        </React.Fragment>
      }
    </Show>
  )
}

export default CharacterList
