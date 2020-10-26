export default {
  draw() {
    const circles = document.getElementsByClassName('circleIn');
    [].slice.call(circles).forEach((c, index) => {
      const ctx = c.getContext('2d')
      ctx.strokeStyle = 'orange'
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.arc(100, 100, 28, Math.PI * (0 + index), Math.PI * (1.5 + index))
      ctx.stroke()
    })
  },
}
