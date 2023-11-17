import { z } from 'zod'

export const isNumber = (data: unknown): data is number => z.number().safeParse(data).success

export const isNumbers = (data: unknown): data is number[] =>
  z.array(z.number()).safeParse(data).success
