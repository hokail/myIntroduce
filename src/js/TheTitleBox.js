export default {
  BoxInit() {
    (function() {
      const title = document.getElementById('hello-title')
      for ( let i = 1; i < 6 ; i ++){
        const side = document.createElement('div')
        side.className = 'sides'
        title.append(side)
      }
    }());
    (function() {
      const sides = document.getElementsByClassName('sides')
    }());
  },
}