export type NewsletterState = {
  readonly hasSended: boolean
  readonly isLoading: boolean
  readonly hasError: boolean
}

export type NewsletterSend = {
  name: string
  email: string
}