const tween = {
  linear:        (t, b, c, d) => (c*t/d + b),
  easeIn:        (t, b, c, d) => (c * ( t /= d) * t + b),
  strongEaseIn:  (t, b, c, d) => (c * ( t /= d ) * t * t * t * t + b),
  strongEaseOut: (t, b, c, d) => (c * ( ( t = t / d - 1) * t * t * t * t + 1 ) + b),
  sineaseIn:     (t, b, c ,d) => (c * ( t /= d) * t * t + b),
  sineaseOut:    (t, b, c, d) => (c * ( ( t = t / d - 1) * t * t + 1 ) + b)
}

