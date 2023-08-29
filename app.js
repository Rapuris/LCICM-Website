const navSlide = ()=> {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  burger.addEventListener('click',() => {
    nav.classList.toggle('nav-active');

     //animate links
    navLinks.forEach((link, index) => {
      // console.log(index);
      if(link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        console.log(index / 7 + 0.3);
      }
    
    });

    burger.classList.toggle('toggle');

  });

}

navSlide();


