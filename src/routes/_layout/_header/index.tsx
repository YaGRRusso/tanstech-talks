import { Title } from '@/components/common/title'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/_layout/_header/')({
  component: Page,
})

function Page() {
  const { t } = useTranslation()

  return (
    <>
      <Title>{t('hello', { name: 'Droz' })}</Title>
      <ul className="flex flex-col gap-4 text-center text-muted-foreground">
        <li>
          <strong>{t('features.advancedCodeSplitting.title')}</strong>:{' '}
          {t('features.advancedCodeSplitting.description')}
        </li>
        <li>
          <strong>{t('features.fileBasedRouting.title')}</strong>: {t('features.fileBasedRouting.description')}
        </li>
        <li>
          <strong>{t('features.bundlerCompatibility.title')}</strong>: {t('features.bundlerCompatibility.description')}
        </li>
        <li>
          <strong>{t('features.easeOfConfiguration.title')}</strong>: {t('features.easeOfConfiguration.description')}
        </li>
        <li>
          <strong>{t('features.typeSafety.title')}</strong>: {t('features.typeSafety.description')}
        </li>
        <li>
          <strong>{t('features.extensibilityAndFlexibility.title')}</strong>:{' '}
          {t('features.extensibilityAndFlexibility.description')}
        </li>
      </ul>
    </>
  )
}
