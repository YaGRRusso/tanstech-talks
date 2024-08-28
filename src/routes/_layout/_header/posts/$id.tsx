import { Skeleton } from '@/components/ui/skeleton'
import { useGetPost } from '@/hooks/queries/placeholder'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_header/posts/$id')({
  component: Page,
})

function Page() {
  const { id } = Route.useParams()
  const { data, isLoading } = useGetPost({ id })

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        <Skeleton className="h-12 w-full" repeat={2} />
      ) : (
        <>
          <h1 className="text-3xl">{data?.title}</h1>
          <p className="text-muted-foreground">{data?.body}</p>
        </>
      )}
    </div>
  )
}
