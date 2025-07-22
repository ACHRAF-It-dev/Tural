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

  let nameInput = document.querySelector('#name');
  let nameLabel = document.querySelector('.name-label');

  let emailInput = document.querySelector('#email');
  let emailLabel = document.querySelector('.email-label');

  let messageInput = document.querySelector('#message');
  let messageLabel = document.querySelector('.message-label');

if(nameInput){
nameInput.addEventListener('focus',()=>{
  nameLabel.classList.add('hide');
})}

if(nameInput){
nameInput.addEventListener('blur',()=>{
  nameLabel.classList.remove('hide');
})}
// if(nameInput){
// nameInput.addEventListener('input',()=>{
//   if (nameInput.value===''){
//     nameLabel.classList.remove('hide');
//   }else{
//     nameLabel.classList.add('hide');
//   }
// })}


if(emailInput){
emailInput.addEventListener('focus',()=>{
  emailLabel.classList.add('hide');
})}

if(emailInput){
emailInput.addEventListener('blur',()=>{
  emailLabel.classList.remove('hide');
})}
// if(emailInput){
// emailInput.addEventListener('input',()=>{
//   if (emailInput.value===''){
//     emailLabel.classList.remove('hide');
//   }else{
//     emailLabel.classList.add('hide');
//   }
// })}

if(messageInput){
messageInput.addEventListener('focus',()=>{
  messageLabel.classList.add('hide');
})}

if(messageInput){
messageInput.addEventListener('blur',()=>{
  messageLabel.classList.remove('hide');
})}
// if(messageInput){
// messageInput.addEventListener('input',()=>{
//   console.log('achraf')
//   if (messageInput.value===''){
//     messageLabel.classList.remove('hide');
//   }else{
//     messageLabel.classList.add('hide');
//   }
// })}