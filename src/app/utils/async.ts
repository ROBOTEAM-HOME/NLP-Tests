export interface Callback<T> {
  (error: Error | null, value?: T): void
}

export function promisifyNode<T>(fn: Function, that?: any): (...rest: any[]) => Promise<T> {
  return (...rest: any[]): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      const callback = (err: Error, result: any) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      }
      rest.push(callback)
      fn.apply(that || fn, rest)
    })
  }
}

export const dePromisifyNode = <T>(fn: Function, that?: any): Function => {
  return (...rest: any[]): void => {
    const callback: Callback<T> = rest.pop()
    fn.apply(that, rest).then(
      (data: T) => callback(null, data), (err: Error) => callback(err))
  }
}

export function delay(ms: number) {
  return new Promise<any>(resolve => {
    setTimeout(() => resolve(), ms)
  })
}

export function interval(ms: number) {
  return new Promise<any>(resolve => {
    setInterval(() => resolve(), ms)
  })
}

export function to (promise: any) {
  return promise.then( (data: any) => {
    return [null, data]
  })
    .catch((err: any) => [err])
}
