export interface IFilterBox {
  additionalList: Array<string>
  className?: string
  discardCallback?: (label: string) => void
  discardAllCallback?: () => void
}
