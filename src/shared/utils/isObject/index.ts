import { WouldBe } from "@/shared/types/utils"

/**
 * Objectかどうかを判定する型ガード関数
 * @param value - unknown value
 */
export const isObject = <T extends Record<string, unknown>>(value: unknown): value is WouldBe<T> =>
  typeof value === "object" && value !== null
