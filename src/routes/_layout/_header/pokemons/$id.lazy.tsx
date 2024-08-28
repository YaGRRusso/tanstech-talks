import { useGetPokemonByName } from '@/hooks/queries/pokemons'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { PokemonCard } from '@/components/common/card'

export const Route = createLazyFileRoute('/_layout/_header/pokemons/$id')({
  component: Page,
  pendingComponent: PendingPage,
})

function PendingPage() {
  return <div>Loading...</div>
}

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
