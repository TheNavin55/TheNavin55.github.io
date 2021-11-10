let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(1000)
  .typeString('Cristian Exequiel Gomez')
  .pauseFor(9000)
  .deleteChars(10)
  .start();
