import { parseEnv } from "znv"
import { z } from "zod"

export const parsedEnv = parseEnv(process.env, {
  // For app
  NODE_ENV: z
    .enum(["", "development", "test", "preview", "staging", "production"])
    .optional(),
  APP_URL: z.string().url().optional().default("http://localhost:3000"),
  SESSION_SECRET: z.string().min(1),

  // For database
  DATABASE_URL: z.string().min(1),
  DATABASE_BRANCH: z
    .enum(["", "local", "dev", "staging", "test", "main"])
    .optional(),
})

/**
 * For client-side usage only
 */
export const parsedEnvClient = {
  NODE_ENV: parsedEnv.NODE_ENV
}

export const isDevelopment = parsedEnv.NODE_ENV === "development"
export const isProduction = parsedEnv.NODE_ENV === "production"