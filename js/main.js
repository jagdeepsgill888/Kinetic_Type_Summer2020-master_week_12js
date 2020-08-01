(() => {
  let audio = document.querySelector('audio'),
      playButton = document.querySelector('.controls button');
      typeAnim = gsap.timeline({paused: true});

      typeAnim.to("#you",{ opacity:1, duration: 0.25})
               .to("#wanna", { opacity:1, duration: 0.3})
               .to("#play", { opacity:1, duration: 0.5})
               .to("#rough", { opacity:1, duration: 0.5})
               .to("#typelayout", {  opacity:1, duration: 0.5, rotate:-90, scaleX:1.5, scaleY:1.5, x: -60, y: -300}, "<");

  function playAnimation() {
    typeAnim.play();
    audio.play();
   }



  playButton.addEventListener("click", playAnimation);

})();
