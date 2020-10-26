/* eslint-disable */
export default {
  cards: $('.card'),
  cardClose: $('#cardClose'),
  init() {
    this.cards = $('.card')
    this.cardClose = $('#cardClose')
    // jquery的each方法和数组的forEach方法不同，这里前一个参数是index，后一个参数才是item,each出的是dom对象，还需要
    // 转换为js对象
    let current = {}
    this.cards.each((index, card) => {
      // this.choseCard(index,card) 

      let that = this
      $(card).click (function(e) {
        // 不加（）的话，会返回这个方法的内容
        // 如果这个方法内容为undefined，那么它不是jquery对象，也就是当前并没有放大显示的卡片
        if( current.removeAttr !== undefined){
          current.removeAttr('style')
        }
       
        // 放大卡片
        that.choseCard(index,card) 
        current = $(this) 

        //显示返回按钮
        that.cardClose.css('visibility', 'visible')
        that.cardClose.css('opacity', 1)

        // 阻止事件冒泡
        if (e && e.stopPropagation) {
          e.stopPropagation();
        } else {
            window.event.cancelBubble = true;
        }   
      })
    })
    this.cardClose.click(() => {
      // 卡片返回原位置
      this.backCard(this.cards)
    })  
  },

  // 选中卡片
  choseCard(index,card) {
    if (index < 2) {
      $(card).css('left', 0)
    } else if (index > 2) {
      $(card).css('right', 0)
    }
    $(card).css('zIndex', 10)
    $(card).css('top', 0)
    $(card).css('transform', 'scale(1.3)')
  },

  // 卡片回到原位置
  backCard( ) {
    this.cards.each((index, card) => {
      $(card).removeAttr('style')
    })
    $(this.cardClose).css('visibility','hidden')
    $(this.cardClose).css('opacity', 0)
  },
}
