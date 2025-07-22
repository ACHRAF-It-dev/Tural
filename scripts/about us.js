let humburgerBtn = document.querySelector('.humburger-btn');
let humburgerIcon = document.querySelector('.humburger-icon');
let overlayClass = document.querySelector('.overlay');

humburgerBtn.addEventListener('click',()=>{
  if (overlayClass.classList.contains('full-opacity')){
    overlayClass.classList.remove('full-opacity');
    humburgerIcon.src = './assets/svgs/humburger icon.svg';
  }else{
    overlayClass.classList.add('full-opacity');
    humburgerIcon.src = './assets/svgs/close icon.svg';
  }
});

  const svg = document.querySelector('.animated-svg');
  const character = document.querySelector('#character');
  const liftingMachine = document.querySelector('#lifting-machine');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        character.classList.add('motion');
        liftingMachine.classList.add('motion');
      }
    });
  }, {
    threshold: 0.7 // Adjust: 0.5 = 50% of SVG must be visible
  });

  observer.observe(svg);