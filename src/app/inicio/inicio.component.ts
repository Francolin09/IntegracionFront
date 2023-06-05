import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {

  navMenu: any;
  navToggle: any;
  navClose: any;



  ngOnInit(){
    this.navMenu = document.getElementById('nav-menu') as HTMLElement;
    this.navToggle = document.getElementById('nav-toggle') as HTMLElement;
    this.navClose = document.getElementById('nav-close') as HTMLElement;

    /* Validar si existe constante */
    if (this.navToggle) {
      this.navToggle.addEventListener('click', () => {
        this.navMenu.classList.add('show-menu');
      });
    }

    /* Menu oculto */
    if (this.navClose) {
      this.navClose.addEventListener('click', () => {
      this.navMenu.classList.remove('show-menu')
      })
    }

    /* Eliminar menu movil */
    const navLink = document.querySelectorAll('.nav__link')


    /* Eliminar menu movil */
    const navLink1 = document.querySelectorAll('.nav__link')

    function linkAction() {
    const navMenu = document.getElementById('nav-menu') as HTMLElement;
    // Cuando haga clic en cada nav__link, se eliminara la clase show-menu
    navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))


    
    /* Cambiar cabecera de fondo */
    function scrollHeader() {
      const header = document.getElementById('header') as HTMLElement;
    
      // Cuando el desplazamiento sea mayor que 50 de altura, se agregará la clase de encabezado de desplazamiento
      if (window.scrollY >= 50) {
        header?.classList.add('scroll-header');
      } else {
        header?.classList.remove('scroll-header');
      }
    }
    
    window.addEventListener('scroll', scrollHeader);

    /* Desplazarse para arriba */
    function scrollUp() {
      const scrollUp = document.getElementById('scroll-up') as HTMLElement
      // Cuando el desplazamiento sea superior a 200 de altura, se agregara la clase show-scroll
      if (window.scrollY >= 200) scrollUp.classList.add('show-scroll');
      else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)


    /* Desplazar secciones */
    const sections = document.querySelectorAll<HTMLElement>('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        const link = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add('active-link');
          } else {
            link.classList.remove('active-link');
          }
        }
      });
    }

    window.addEventListener('scroll', scrollActive);

  } /* cierre ngOnInit*/
}


