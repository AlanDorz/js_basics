let targetExample01 = anime({
  targets: '.targets .box',
  translateX: 250,
  autoplay: false
})

let targetsBtn01 =
  document.querySelector('#targets_box')

targetsBtn01.onclick = targetExample01.play

let targetExample02 = anime({
  targets: '.targets .triangle',
  translateX: 150,
  autoplay: false
})

let targetsBtn02 =
  document.querySelector('#targets_triangle')

targetsBtn02.onclick = targetExample02.play


// ----


let propsAnimation01 = anime({
  targets: '.props .box',
  translateX: 400,
  rotate: 180,
  backgroundColor: "#fff",
  borderRadius: ['0%', '50%'],
  autoplay: false,
  duration: 4000,
  easing: 'easeInOutQuad'
})
let propsBtn01 = document.querySelector('#propsBtn01')
propsBtn01.onclick = propsAnimation01.play












//
