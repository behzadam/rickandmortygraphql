import type { NextPage } from 'next'
import Head from 'next/head'
import CharacterList from '../components/character/CharacterList'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rick and Morty | React Query Nextjs Graphql</title>
        <meta
          name="description"
          content="Rick and Morty | React Query Nextjs Graphql"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CharacterList />
      </main>
    </div>
  )
}

export default Home
