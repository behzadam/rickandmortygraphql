import imageLoader from '../../utils/image-loader'
import Image from 'next/image'
import React from 'react'
import Show from '../show/Show'
import { Character } from '../../generated/types'

const IMG_SIZE = 80

const MetaInfo = ({ item, ...other }: CharacterListItemProps) => {
  return (
    <div
      {...other}
      className="inline-flex items-center mt-1 text-center border-2 divide-x py-0.5 rounded-md divide-slate-700 text-xs text-slate-300 border-slate-600 bg-slate-800"
    >
      <div
        className={`px-2 first-letter:uppercase ${
          item.status === 'Alive' ? 'text-green-500' : 'text-inherit'
        }`}
      >
        {' '}
        {item.status}
      </div>
      <div className="px-2">{item.gender}</div>
      <div className="px-2">{item.species}</div>
    </div>
  )
}

type CharacterListItemProps = {
  item: Character
}

const CharacterListItem = ({ item }: CharacterListItemProps) => {
  return (
    <Show when={item}>
      <article className="flex w-full p-4 border-b bg-slate-700/50 border-slate-700/50">
        <div>
          <Image
            src={item.image!}
            loader={imageLoader}
            alt={item.name!}
            width={IMG_SIZE}
            height={IMG_SIZE}
            unoptimized
            className="border-2 rounded-lg"
          />
        </div>
        <div className="flex-1 pl-4">
          <h2 className="mb-2 text-base font-bold leading-4 text-gray-300">
            {item.name}
          </h2>
          <p className="mb-1 text-sm">
            <span className="pr-2 text-slate-500">Last known location:</span>
            <span className="text-slate-300">
              {item?.location?.name ?? 'unknown'}
            </span>
          </p>
          <MetaInfo item={item} />
        </div>
      </article>
    </Show>
  )
}

export default CharacterListItem
