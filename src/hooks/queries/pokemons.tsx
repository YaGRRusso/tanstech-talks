import { toast } from '@/components/ui/use-toast'
import { tryCatch } from '@/helpers/tryCatch'
import { useQuery } from '@tanstack/react-query'
import { Pokedex } from 'pokeapi-js-wrapper'

export const useGetPokemonsList = (dict: { offset: number; limit: number } = { offset: 0, limit: 50 }) => {
  const Poke = new Pokedex()

  return useQuery({
    queryKey: ['getPokemonsList', dict],
    queryFn: async () => {
      return await tryCatch(Poke.getPokemonsList(dict), () =>
        toast({ title: 'Error', description: 'Pokemon not found', variant: 'destructive' }),
      )
    },
  })
}

export const useGetPokemonByName = (name: string) => {
  const Poke = new Pokedex()

  return useQuery({
    queryKey: ['getPokemonByName', name],
    queryFn: async () => {
      return await tryCatch(Poke.getPokemonByName(name), () =>
        toast({ title: 'Error', description: 'Pokemon not found', variant: 'destructive' }),
      )
    },
  })
}
