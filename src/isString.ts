import { z } from 'zod'

export const isString = (data: unknown): data is string => z.string().safeParse(data).success

export const isStrings = (data: unknown): data is string[] =>
  z.array(z.string()).safeParse(data).success
