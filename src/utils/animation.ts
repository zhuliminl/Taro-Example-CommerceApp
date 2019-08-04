export const moveStrategies = {
  linear:        (t, b, c, d) => (c*t/d + b),
  easeIn:        (t, b, c, d) => (c * ( t /= d) * t + b),
  strongEaseIn:  (t, b, c, d) => (c * ( t /= d ) * t * t * t * t + b),
  strongEaseOut: (t, b, c, d) => (c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b),
  sineaseIn:     (t, b, c ,d) => (c * ( t /= d) * t * t + b),
  sineaseOut:    (t, b, c, d) => (c * ( ( t = t / d - 1) * t * t + 1 ) + b),
  easeOut:       (t,b,c,d) => {
                    if ((t/=d) < (1/2.75)) {
                      return c*(7.5625*t*t) + b;
                    } else if (t < (2/2.75)) {
                      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                    } else if (t < (2.5/2.75)) {
                      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                    } else {
                      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                    }
                  }
}


  // 让某个值在某个区间变
export const animateValue = (a, b, fn) => {
    // console.log('FIN 初始值a', a)
    // console.log('FIN 初始值b', b)
    const duration = 0.3*1000
    let d = b - a
    let startT = +new Date();
    let ID = setInterval(() => {
      let curT = +new Date();
      let passT = curT - startT;
      let value = moveStrategies.sineaseIn(passT, a, d, duration)
      fn(value)
      if(passT > duration) {
        fn(b)  // 强制纠正动画值的不精确性
        // console.log('FIN 终点值', value)
        clearInterval(ID)
      }
    }, 0.4)
  }