export interface ButtonProps {
  color: 'blue-100' | 'blue-200' | 'blue-300' | 'blue-400' | 'blue-500'
  label: string
  click: () => void
}