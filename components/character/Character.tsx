import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import imageLoader from '../../utils/image-loader'
import { Character } from '../../generated/types'

type Props = {
  character: Character
}

const CharacterListItem = ({ character }: Props) => {
  return (
    <Link href={`/characters/${character?.id}`}>
      <a className="block bg-white">
        <article className="relative flex p-2">
          <div className="relative w-16 h-16">
            <Image
              loader={imageLoader}
              src={character?.image ?? ''}
              alt={character?.name ?? ''}
              unoptimized
              priority
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col pl-4">
            <h2 className="font-semibold">{character.name}</h2>
            <div className="flex mt-auto text-xs text-gray-500">
              <span>{character.status}</span>
              <span className="mx-1">|</span>
              <span>{character.species}</span>
            </div>
          </div>
        </article>
      </a>
    </Link>
  )
}

export default CharacterListItem
