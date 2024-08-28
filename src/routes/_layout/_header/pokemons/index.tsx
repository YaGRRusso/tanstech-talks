import { Title } from '@/components/common/title'
import { Pagination } from '@/components/ui/pagination'
import { useGetPokemonsList } from '@/hooks/queries/pokemons'
import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'

const DEFAULT_LIMIT = 50

const searchSchema = z.object({
  limit: z.number().optional().catch(DEFAULT_LIMIT),
  offset: z.number().optional().catch(0),
})

export const Route = createFileRoute('/_layout/_header/pokemons/')({
  validateSearch: searchSchema,
  component: Page,
})

function Page() {
  const { offset, limit } = Route.useSearch()
  const { data } = useGetPokemonsList({ limit: limit ?? DEFAULT_LIMIT, offset: offset ?? 0 })

  return (
    <>
      <Title>Pokemons</Title>
      <ul className="flex flex-col gap-4 text-center text-muted-foreground">
        {data?.results.map((pokemon) => (
          <li key={pokemon.name}>
            <Link
              className="capitalize transition-all hover:opacity-80"
              to="/pokemons/$id"
              params={{ id: pokemon.name }}
            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination.Root>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous
              disabled={offset === 0}
              to={'/pokemons'}
              search={(old) => ({
                ...old,
                offset: offset ? offset - (limit ?? DEFAULT_LIMIT) : (limit ?? DEFAULT_LIMIT),
              })}
            />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Next
              disabled={data ? data.count <= (offset ?? 0) : true}
              isActive={false}
              to={'/pokemons'}
              search={(old) => ({
                ...old,
                offset: offset ? offset + (limit ?? DEFAULT_LIMIT) : (limit ?? DEFAULT_LIMIT),
              })}
            />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination.Root>
    </>
  )
}
