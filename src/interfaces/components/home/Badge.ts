export interface IBadge {
  label: string
  bgColor: string
  roundedSize?: string
  textColor?: string
  className?: Array<string>
  discardable?: boolean
  discardCallback?: () => void
  classNameDiscard?: Array<string>
  discardBgColor?: string
  discardTextColor?: string
  discardHoverBgColor?: string
  clickCallback?: (e?: any) => void
}