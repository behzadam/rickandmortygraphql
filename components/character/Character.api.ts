import { CharactersQuery } from "@/src/graphql/types"
import { fetcher } from "@/src/utils/axiosHelper"
import { CharactersQueryDocument } from "./Character.queries"

export const fetchCharacters = async (page: number | null = null): Promise<CharactersQuery> => {
  return await fetcher<CharactersQuery>(CharactersQueryDocument, { page })
}