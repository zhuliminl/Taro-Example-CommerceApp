export const phone = {
  hideFormat: (n: string) => {
    const a = n.substring(0,3)
    const b = n.substring(7,11)
    return a + '****' + b
  },
  divideFormat: (n) => {
    const a = n.substring(0,3)
    const b = n.substring(3,7)
    const c = n.substring(7,11)
    return a + ' ' + b + ' ' + c
  }
}