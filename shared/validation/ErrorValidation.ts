export interface ErrorItem {
  field: string
  message: string
}

export interface ErrorList extends Array<ErrorItem> {}

export interface ErrorValidation {
  valid: boolean
  errors?: ErrorList
}
