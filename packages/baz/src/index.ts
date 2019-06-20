export type Bar = {
  bar: string
}

export const bar = (value: string): Bar => value === 'Bar' ? {
  bar: value,
} : undefined

export default undefined
