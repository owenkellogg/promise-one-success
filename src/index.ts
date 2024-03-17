// oneSuccess.ts
export default function oneSuccess<T>(promises: Promise<T>[]): Promise<T> {
    return Promise.all(promises.map(p => p.then(
      val => Promise.reject(val),
      err => Promise.resolve(err)
    ))).then(
      errors => Promise.reject(errors),
      val => Promise.resolve(val)
    );
  }
  