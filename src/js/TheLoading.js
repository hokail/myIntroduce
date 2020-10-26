export default {
  loading() {
    // 添加canvas
    (function init() {
      const wave = document.getElementById('wave')
      for (let i = 1; i <= 3; i++) {
        const cancas = document.createElement('canvas')
        cancas.width = 500
        cancas.height = 500
        wave.appendChild(cancas)
      }
      const cs = document.getElementsByTagName('canvas');
      // cs是一个伪数组，因此需要先转换成真数组
      [].slice.call(cs).forEach((c, index) => {
        const ctx = c.getContext('2d')
        ctx.strokeStyle = 'white'
        ctx.lineWidth = index
        ctx.beginPath()
        ctx.arc(250, 250, (50 + (20 * index)), Math.PI * (1.5 + (0.2 * index)), Math.PI * (0 + (0.2 * index)))
        ctx.stroke()
      });
    }());
    (function timer() {
      let current = 1
      const pre = document.getElementById('pre')
      const preId = setInterval(() => {
        current += 1
        pre.innerHTML = current;
        // eslint-disable-next-line
        current === 100 && clearInterval(preId)
      }, 5)
    }());
  },
}
