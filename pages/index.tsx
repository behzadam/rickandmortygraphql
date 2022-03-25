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
        <header className="py-8 text-center">
          <h1 className="text-4xl font-bold text-gray-50">Rick and Morty</h1>
          <p className="pt-2 text-md text-slate-400">React Query | Graphql</p>
        </header>
        <CharacterList />
      </main>
    </div>
  )
}

export default Home
