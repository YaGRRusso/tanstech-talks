import { createLazyFileRoute } from '@tanstack/react-router'

console.log('light page loaded')

export const Route = createLazyFileRoute('/_layout/_header/light')({
  component: () => <div>Hello /_layout/_header/light!</div>,
})
