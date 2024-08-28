import { Select } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/contexts/theme'
import { langs } from '@/i18n'
import { cn } from '@/lib/utils'
import { createFileRoute, Link, LinkProps, Outlet } from '@tanstack/react-router'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_layout/_header')({
  component: Header,
})

const routes: LinkProps[] = [
  { children: 'Tanstech Talks', to: '/' },
  { children: 'Heavy', to: '/heavy' },
  { children: 'Light', to: '/light' },
  { children: 'Error', to: '/error' },
  // @ts-expect-error intentional error
  { children: 'Not Found', to: '/notfound' },
  { children: 'Pokemons', to: '/pokemons' },
  { children: 'Search', to: '/pokemons/search' },
]

function Header() {
  const { i18n } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={cn('flex min-h-screen flex-col bg-background text-foreground', theme)}>
      <header className="container flex w-full items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          {routes.map(({ children, ...route }) => (
            <Link
              key={route.to}
              className="text-foreground/80 transition-all hover:opacity-80 [&.active]:text-foreground/100"
              {...route}
            >
              {children}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 max-sm:hidden">
          <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme}>
            {theme === 'light' && <Sun />}
            {theme === 'dark' && <Moon />}
          </Switch>
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
        </div>
      </header>
      <div className="container flex flex-1 flex-col items-center justify-center gap-8 py-4">
        <Outlet />
      </div>
    </div>
  )
}
