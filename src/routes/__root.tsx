import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { langs } from '../i18n'
import { useTranslation } from 'react-i18next'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { ThemeProvider } from '@/contexts/theme'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'

export const Route = createRootRoute({
  component: RootLayout,
})

export default function RootLayout() {
  const { i18n } = useTranslation()
  const { toast } = useToast()

  return (
    <div className="dark min-h-screen bg-background font-poppins text-foreground">
      <ThemeProvider>
        <div className="flex justify-between gap-2 p-2">
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link to="/" className="[&.active]:font-bold">
                Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about" className="[&.active]:font-bold">
                About
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Select.Root value={i18n.language} onValueChange={(ev) => i18n.changeLanguage(ev)}>
              <Select.Trigger>
                <Select.Value placeholder="Select option" />
              </Select.Trigger>
              <Select.Content>
                {langs.map((lang) => (
                  <Select.Item key={lang.value} value={lang.value}>
                    {lang.label}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Root>
            <Button
              onClick={() => {
                toast({
                  title: 'Uh oh! Something went wrong.',
                  description: 'There was a problem with your request.',
                })
              }}
            >
              🍞 Toast
            </Button>
          </div>
        </div>
        <Toaster />
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </div>
  )
}
