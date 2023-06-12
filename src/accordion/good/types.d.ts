export type AccordionContext = {
  next: (name: string) => void,
  previous: (name: string) => void,
  first: () => void,
  last: () => void
}