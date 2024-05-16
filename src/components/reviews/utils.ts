export function splitArr(arr: any[], n: number): any[][] {
  const res: any[][] = []

  for (let i = 0; i < arr.length; i++) {
    const index = i % n

    if (!res[index]) {
      res[index] = []
    }

    res[index].push(arr[i])
  }

  return res
}
