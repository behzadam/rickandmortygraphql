import React, { useMemo, useEffect } from 'react'
import useCharacters from './useCharacters'
import { Character } from '../../generated/types'
import Show from '../show/Show'
// import useIntersectionObserver from '../list/useIntersectionObserver'

const CharacterList = () => {
  const initialPage = 1

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
    fetchNextPage,
  } = useCharacters(initialPage)

  const loadMoreButtonRef = React.useRef<HTMLButtonElement>(null)
  // useIntersectionObserver({
  //   target: loadMoreButtonRef,
  //   onIntersect: fetchNextPage,
  //   enabled: !!hasNextPage,
  // })

  const characters: Character[] | undefined = useMemo(() => {
    return data?.pages?.reduce((result, currentPage) => {
      return [...result, ...(currentPage?.characters?.results as Character[])]
    }, [] as Character[])
  }, [data])

  useEffect(() => {
    console.log(data?.pageParams)
  }, [data])

  if (isLoading) return <></>
  return (
    <Show when={characters}>
      {
        <React.Fragment>
          {/* <List
            keyExtractor={(item: Character) => item.id!}
            data={characters}
            renderItem={(item: Character, view: string) => {
              return view === 'grid' ? (
                <CharacterGridItem item={item} />
              ) : (
                <CharacterListItem item={item} />
              )
            }} /> */}
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
            <div>
              {isFetching && !isFetchingNextPage
                ? 'Background Updating...'
                : null}
            </div>
          </div>
        </React.Fragment>
      }
    </Show>
  )
}

export default CharacterList
