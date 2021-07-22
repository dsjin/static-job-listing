export interface IJobCard {
  title: string
  src: string
  company: string
  chainTexts: Array<string>
  new: boolean
  featured: boolean
  additionItems: Array<string>
  additionCallback?: (label: string) => void
}