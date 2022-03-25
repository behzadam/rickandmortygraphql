## Simple example of React Query and Graphql

To run on your local machine:

`yarn install`

This project uses graphql-codegen to generate Rick and Morty Graphql API types.

#### The packages we need:

```
@graphql-codegen/cli
@graphql-codegen/introspection
@graphql-codegen/typed-document-node @graphql-codegen/typescript
@graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query
```

For now, we already generated types but if you want to extend this project you need to add new queries and then run this command:

`yarn graphql:codegen`

We want to use our custom hooks and aslo fetcher.

( graphql-codegen generates custom hook and a fetcher but here we want to use axios instead)

Then this is the `codegen.yml` file:

```
overwrite: true
schema: 'https://rickandmortyapi.com/graphql'
documents: './components/**/*.queries.ts'
generates:
  ./generated/types.ts:
    plugins:
      - typescript
      - typescript-operations
      - typed-document-node

```

We want to send DocumentNode to our custom fetcher:

```
import { print, DocumentNode } from 'graphql'
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
```

Then we need this package:

`graphql-typed-document-node`

And our query should be like this:

```
import { gql } from 'graphql-tag'

export const CharactersQueryDocument = gql`
  query Characters($page: Int) {
    characters(page: $page) {
      ...
```

Then `graphql-codegen` will generate a type like this:

```
export const CharactersDocument = {
  kind: 'Document',
  definitions: [
    ...
```

paths: ./genereated/types.ts
