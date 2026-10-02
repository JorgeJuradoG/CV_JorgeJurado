import { Component } from '@angular/core';
import { Background } from './background/background';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Tecnologias } from './tecnologias/tecnologias';
import { Experiencia } from './experiencia/experiencia';
import { Proyectos } from './proyectos/proyectos';
import { Formacion } from './formacion/formacion';
import { Contacto } from './contacto/contacto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Background, Navbar, Hero, About, Tecnologias, Experiencia, Proyectos, Formacion, Contacto],
  template: `
    <app-background />
    <app-navbar />
    <main class="mx-auto max-w-5xl px-5 pb-16">
      <app-hero />
      <app-about />
      <app-tecnologias />
      <app-experiencia />
      <app-proyectos />
      <app-formacion />
      <app-contacto />
    </main>
    <footer class="text-center text-sm text-white/50 pb-8">© 2026 Jorge Jurado</footer>
  `,
})
export class App {}