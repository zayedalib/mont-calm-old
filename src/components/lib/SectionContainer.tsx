import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <div className="max-w-3xl px-2 mx-auto xl:max-w-6xl xl:px-0">{children}</div>
}