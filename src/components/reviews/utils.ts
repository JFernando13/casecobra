export function splitArr(arr: T[], n: number): T[][] {
  const res: T[][] = []

  for (let i = 0; i < arr.length; i++) {
    const index = i % n

    if (!res[index]) {
      res[index] = []
    }

    res[index].push(arr[i])
  }

  return res
}
