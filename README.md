# Simple example of React Query and Graphql

- React Query
- Axios
- Graphql Codegen
- Rick and Morty API

To run on your local machine:

`yarn install`

This project uses graphql-codegen to generate Rick and Morty Graphql API types.

## @graphql-codegen packages

```js
@graphql-codegen/cli
@graphql-codegen/introspection
@graphql-codegen/typed-document-node @graphql-codegen/typescript
@graphql-codegen/typescript-operations @graphql-codegen/typescript-react-query
```

For now, we already generated types but if you want to extend this project you need to add new queries and then run this command:

`yarn graphql:codegen`

We want to use our custom hooks and aslo fetcher.

( graphql-codegen generates custom hooks and a fetcher but we want to use our custom hook and axios )

Then this is the `codegen.yml` file:

```js
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

Our custom fetcher:

```ts
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
