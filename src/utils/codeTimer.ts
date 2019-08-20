export const codeTimer = (change, done, time) => {
  const i = setInterval(() => {
    console.log('FIN timer is running !!!!', time)
    change(time--)
  }, 1000)

  const t = setTimeout(() => {
    done()
    clearInterval(i)
  }, time * 1000)

  return () => {
    console.log('FIN timer cancel success!')
    clearTimeout(t)
    clearInterval(i)
  }
}

