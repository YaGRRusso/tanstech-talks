import { Title } from '@/components/common/title'
import { Button } from '@/components/ui/button'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Frown } from 'lucide-react'

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: PageNotFound,
})

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-32">
      <Frown size={64} />
      <Title>Not Found</Title>
      <Button asChild>
        <Link to="/">Go to Home</Link>
      </Button>
    </div>
  )
}

export default function RootLayout() {
  return <Outlet />
}
