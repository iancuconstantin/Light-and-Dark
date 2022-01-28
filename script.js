function switchTheme(event) {
  
  const navClasses = ['navbar-dark', 'bg-dark'];
  const cardsClasses = ['text-white', 'bg-dark', 'border-light'];
  const footerClasses = ['justify-content-end','text-white']
  

  const bdy = document.querySelector('body');
  const nav = document.querySelector('nav');
  const cards = document.querySelectorAll('.card');
  const table = document.querySelector('table');
  const column = document.querySelectorAll('.column');
  const footer = document.querySelector('body > nav.navbar.mt-5 > div');
  const button = document.getElementById("themeSwitch");
  const txt = document.querySelector("body > div:nth-child(2) > h1");


  bdy.classList.toggle('bg-dark');
  navClasses.forEach(cls=>nav.classList.toggle(cls));
  cards.forEach((item)=> cardsClasses.forEach(cls=>item.classList.toggle(cls)));
  table.classList.toggle('table-dark');
  column.forEach(item=>item.classList.toggle('col-12'));
  footerClasses.forEach(cls=>footer.classList.toggle(cls));
  button.innerText = button.innerText === "Activate Dark Theme" ? "Activate Light Theme" : "Activate Dark Theme";
  txt.classList.toggle('text-white');
  txt.innerText = txt.innerText === "This is the Light theme" ? "This is the Dark theme" : "This is the Light theme";
}