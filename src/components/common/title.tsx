import { ReactNode } from 'react'

export function Title({ children }: { children: ReactNode }) {
  return <h1 className="text-5xl capitalize">{children}</h1>
}
