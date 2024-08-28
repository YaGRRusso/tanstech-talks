import { Avatar } from '@/components/ui/avatar'
import { Pokemon } from 'pokeapi-js-wrapper'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { ScrollArea } from '../ui/scroll-area'

export function PokemonCard(pokemon: Partial<Pokemon>) {
  console.log(pokemon)

  return (
    <Card.Root className="w-full max-w-96 shadow shadow-accent">
      <Card.Header>
        <Avatar.Root className="h-auto w-full">
          <Avatar.Image src={pokemon?.sprites?.front_default ?? ''} alt={pokemon?.name} />
          <Avatar.Fallback>{pokemon?.name}</Avatar.Fallback>
        </Avatar.Root>
        <Card.Title>{pokemon?.name}</Card.Title>
        <Card.Description>Pokemon</Card.Description>
        <ul className="flex gap-2">
          {pokemon.types?.map((type) => (
            <Badge key={type.type.name} asChild>
              <li>{type.type.name}</li>
            </Badge>
          ))}
        </ul>
      </Card.Header>
      <Separator />
      <Card.Content className="flex flex-col gap-4 p-6">
        <strong>Moves</strong>
        <ScrollArea className="h-32">
          <ul className="text-muted-foreground">
            {pokemon.moves?.map((move) => <li key={move.move.name}>{move.move.name}</li>)}
          </ul>
        </ScrollArea>
      </Card.Content>
    </Card.Root>
  )
}
