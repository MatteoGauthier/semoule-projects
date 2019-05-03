tippy('.tick-icon', {
  content: 'Projet terminé, toujours maintenu',
  theme: 'light',
  placement: 'bottom'
})
tippy('.work-icon', {
  content: 'Projet en construction',
  theme: 'light',
  placement: 'bottom'
})
tippy('.github-icon', {
  content: 'Github Repository',
  theme: 'light',
  placement: 'bottom'
})
tippy('.icon-twitter', {
  content: 'Mon Twitter',
  theme: 'light',
  placement: 'bottom'
})

console.log('%cCette page est en cours de développement ! ⚠', 'color: black; background-color: white; border: 2px solid orange; padding: 5px; ')

var shakeEvent = new Shake({
  threshold: 15
});
shakeEvent.start();

window.addEventListener('shake', shake, false);

function shake() {
  alert('shake!');
}