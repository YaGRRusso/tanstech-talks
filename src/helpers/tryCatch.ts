type FunctionProps<T> = Promise<T> | (() => Promise<T>)
type FallbackProps = (error: unknown) => void

export const tryCatch = async <T>(fn: FunctionProps<T>, fallback?: FallbackProps): Promise<T | undefined> => {
  try {
    return typeof fn === 'function' ? await fn() : await fn
  } catch (error) {
    console.error(error)
    fallback?.(error)
    return undefined
  }
}
