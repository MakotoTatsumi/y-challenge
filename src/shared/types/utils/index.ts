export type AnyObject = Record<string, unknown>

// 全てのプロパティを"Optional"とし、全ての値についてunknown型とした型を返す
export type WouldBe<T> = { [P in keyof T]?: unknown }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any
