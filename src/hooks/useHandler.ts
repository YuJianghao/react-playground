import { useRef } from 'react'

export function useHandler<T extends (...args: any[]) => any>(callback: T): T {
  const ref = useRef<T>()
  ref.current = callback
  return useRef((...args: any) => ref.current?.(...args)).current as T
}
