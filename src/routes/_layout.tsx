import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/contexts/theme'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const Route = createFileRoute('/_layout')({
  component: Layout,
})

const queryClient = new QueryClient()
const isDev = import.meta.env.MODE === 'development'

function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
        <Toaster />
        {isDev && <TanStackRouterDevtools />}
        {isDev && <ReactQueryDevtools />}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
