// import { PokemonCard } from '@/components/common/card'
import { PokemonCard } from '@/components/common/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { tryCatch } from '@/helpers/tryCatch'
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { Pokedex } from 'pokeapi-js-wrapper'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { toast } from '@/components/ui/use-toast'

const searchSchema = z.object({
  name: z.string().optional().catch(''),
})

type FormSchemaProps = z.infer<typeof searchSchema>

const getPokemonByName = async (name: string) => {
  const Poke = new Pokedex()
  return await tryCatch(Poke.getPokemonByName(name), () =>
    toast({ title: 'Error', description: 'Pokemon not found', variant: 'destructive' }),
  )
}

export const Route = createFileRoute('/_layout/_header/pokemons/search')({
  validateSearch: searchSchema,
  loaderDeps: ({ search: { name } }) => ({ name }),
  loader: ({ deps: { name } }) => getPokemonByName(name ?? ''),
  component: Page,
  pendingComponent: PendingPage,
})

function PendingPage() {
  return <div>Loading...</div>
}

function Page() {
  const loader = Route.useLoaderData()
  const navigate = useNavigate({ from: Route.fullPath })
  const search = Route.useSearch()

  const { watch, setValue, handleSubmit } = useForm<FormSchemaProps>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      name: search.name ?? '',
    },
  })

  const onSub = useCallback(
    (data: FormSchemaProps) => {
      navigate({ search: (old) => ({ ...old, name: data.name }) })
    },
    [navigate],
  )

  return (
    <>
      <Link className="text-muted-foreground" to="/pokemons">
        Back
      </Link>
      <form className="flex w-full max-w-96 items-center gap-1" onSubmit={handleSubmit(onSub)}>
        <Input
          value={watch('name')}
          onChange={(ev) => setValue('name', ev.target.value)}
          placeholder="Find a pokemon"
        />
        <Button type="submit" variant="outline">
          Search
        </Button>
      </form>
      <PokemonCard pokemon={{ ...loader }} />
    </>
  )
}
