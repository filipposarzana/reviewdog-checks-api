export type Bar = {
  bar: string,
}

type Foo = {
  foo: string
}

export const bar = (value: string): Bar | undefined => value === 'Bar' ? {
  bar: value,
} : undefined

export default undefined
