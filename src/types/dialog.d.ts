import { ReactNode } from "react"

export interface DialogProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}