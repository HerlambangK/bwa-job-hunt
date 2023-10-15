import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import bcrypt from 'bcryptjs'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hasPassword =async (password:string) => {
  const hasedPassword = await bcrypt.hash(password, 8)
  return hasedPassword
}

export const comparePassword = async (password:string, hasedPassword:string) => {
  const isMatch = await bcrypt.compare(password, hasedPassword)
  return isMatch
}