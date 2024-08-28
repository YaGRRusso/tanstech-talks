import { createFileRoute } from '@tanstack/react-router'

console.log('heavy page loaded')

export const Route = createFileRoute('/_layout/_header/heavy')({
  component: () => <div>Hello /_layout/_header/heavy!</div>,
})
