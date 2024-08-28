import { createRootRoute, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

export default function RootLayout() {
  return <Outlet />
}
