import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/contexts/theme'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="p-2 text-red-500">
      <h3>{t('hello', { name: 'Droz' })}</h3>
      <Switch checked={theme === 'light'} onCheckedChange={toggleTheme} />
    </div>
  )
}
