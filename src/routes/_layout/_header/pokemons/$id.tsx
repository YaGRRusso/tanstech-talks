import { useGetPokemonByName } from '@/hooks/queries/pokemons'
import { createFileRoute, Link } from '@tanstack/react-router'
import { PokemonCard } from '@/components/common/card'

export const Route = createFileRoute('/_layout/_header/pokemons/$id')({
  component: Page,
})

function Page() {
  const { id } = Route.useParams()
  const { data, isLoading } = useGetPokemonByName(id)

  return (
    <>
      <Link className="text-muted-foreground" to="/pokemons">
        Back
      </Link>
      <PokemonCard pokemon={{ ...data }} isLoading={isLoading} />
    </>
  )
}
