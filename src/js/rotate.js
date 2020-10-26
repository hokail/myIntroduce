/* eslint-disable */
export default {
  rotate() {
    const title = $('#hello-title')
    const titleX = title.width()/2 
    const titleY = title.height()/2
    $(title).mousemove((e) => {
      // eslint-disable-next-line)
      let x = Math.round(e.offsetX - titleX)
      let y = Math.round(e.offsetY - titleY)
      let deg = '5deg'
      let yt = y
      let xt = x
      // 当鼠标位于第一三象限时，取0到第二象限上的点形成的射线为坐标轴
      if( (x * y) > 0){ 
        // 第一象限时，负方向旋转
        if( x > 0){
          deg = '-5deg'
        }
        y = - Math.abs(y)
      // 当鼠标位于第二四象限时，取0到第一象限上的点形成的射线为坐标轴
      }else{
        // 第四象限时，负方向旋转
        if( x < 0){
          deg = '-5deg'
        }
        y = Math.abs(y) 
      }   
      x = Math.abs(x)
      title.css('transform', `rotate3d(${x}, ${y}, 0, ${deg}) translate(${xt/10}px,${yt/10}px)`)
    })
    $(title).mouseout( (e) => {
     
      title.css('transform', ``)
    })
   
  },
}
