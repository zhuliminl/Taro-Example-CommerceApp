
export const parseDate = nStr => {
  const n = (+nStr) * 1000
  const date = new Date(n)
  const dateStr = date.toLocaleDateString()
  const list = dateStr.split('/')

  // pc 端和 手机端不一样！
  return list[0] + '.' + list[1] + '.' + list[2]
  // return list[2] + '.' + list[0] + '.' + list[1]
}

export const parseDateForDTK = nStr => {
  return nStr.substr(0, 10).split('-').join('.')
}

export const parseToMinuteago = nStr => {
  // console.log('FIN xxxxxxxxxxxxxxxxxx', nStr)
  const p = parseInt(nStr) * 1000
  const c = new Date().getTime()
  return Math.floor((c - p) / (1000 * 60))
}