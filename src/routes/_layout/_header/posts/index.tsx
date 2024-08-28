import { Skeleton } from '@/components/ui/skeleton'
import { useListPosts } from '@/hooks/queries/placeholder'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/_header/posts/')({
  component: Page,
})

function Page() {
  const { data, isLoading } = useListPosts({ limit: 50, page: 1 })

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">Posts</h1>
      <ul className="flex flex-col gap-4">
        {isLoading ? (
          <Skeleton className="h-16 w-full" repeat={3} />
        ) : (
          data?.map((post) => (
            <li className="flex flex-col hover:opacity-80" key={post.id}>
              <Link to="/posts/$id" params={{ id: post.id.toString() }}>
                <span className="text-foreground">{post.title}</span>{' '}
                <span className="text-muted-foreground">{post.body}</span>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
