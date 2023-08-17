import { ZodError, z } from 'zod'
import { ErrorList, ErrorValidation } from './ErrorValidation'

export interface UserData {
  id?: number
  email: string
  name?: string
}
export class UserValidation {
  static schema = z.object({
    id: z.number().optional(),
    email: z.string().email(),
    name: z.string().optional(),
  })

  static validate(data: UserData): ErrorValidation {
    try {
      UserValidation.schema.parse(data)
      return {
        valid: true,
      }
    } catch (error) {
      const errorList: ErrorList = []
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          errorList.push({ field: err.path.toString(), message: err.message })
        })
        return {
          valid: false,
          errors: errorList,
        }
      }
      return {
        valid: false,
      }
    }
  }
}
