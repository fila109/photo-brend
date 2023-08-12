let burger = document.querySelector('#burger');
let close = document.querySelector('#close');
let tl = gsap.timeline();

tl.to('.load-1', {
  duration: 0.5,
  opacity: 1,
  delay: 0.3,
  y: -20,
  })
  .to('.hero__descr', {
    duration: 0.5,
    opacity: 1,
    delay: 0.3,
  })
  .to('.image1', {
    duration: 0.5,
    opacity: 1,
    scale: 1
  })
  .to('.image2', {
    duration: 0.5,
    opacity: 1,
    scale: 1
  })
  .to('.load-2', {
    duration: 0.5,
    opacity: 1,
  })

burger.onclick = () => {
  tl.to('.menu', {
    duration: 0.5,
    opacity: 1,
    display: 'block',
    ease: 'power2.in'
  })
    .to('.nav__list ', {
      duration: 0.5,
      delay: 0.3,
      y: -20,
      opacity: 1,
    })
    .to('.second', {
      duration: 0.5,
      delay: 0.3,
      y: -20,
      opacity: 1,
    })
}

close.onclick = () => {
  tl.reverse()
  location.reload()
}

