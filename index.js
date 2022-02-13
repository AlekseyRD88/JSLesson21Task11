export function manageClasses() {
  const elem1 = document.querySelector('.one');
  elem1.classList.add('selected');
  const elem2 = document.querySelector('.two');
  elem2.classList.remove('selected');
}
