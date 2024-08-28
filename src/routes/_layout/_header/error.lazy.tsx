import { Title } from '@/components/common/title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { createLazyFileRoute, ErrorComponentProps } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createLazyFileRoute('/_layout/_header/error')({
  component: Page,
  errorComponent: (error) => PageError(error),
})

function PageError(error: ErrorComponentProps) {
  return (
    <>
      <Title>{error.error.name}</Title>
      <Badge>{error.error.message}</Badge>
      <Button onClick={() => error.reset()} variant="outline">
        Try Again
      </Button>
    </>
  )
}

function Page() {
  const [showError, setShowError] = useState(false)
  const error = { name: 'error' }

  return (
    <>
      <Button variant="destructive" onClick={() => setShowError(!showError)}>
        Toggle Error
      </Button>
      {/* @ts-expect-error intentional error */}
      {showError && error.map(() => { })}
    </>
  )
}
