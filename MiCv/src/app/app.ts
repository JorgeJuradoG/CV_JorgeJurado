import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Tecnologias } from './tecnologias/tecnologias';
import { Experiencia } from './experiencia/experiencia';
import { Proyectos } from './proyectos/proyectos';
import { Formacion } from './formacion/formacion';
import { Contacto } from './contacto/contacto';
import { PERFIL } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Hero, About, Tecnologias, Experiencia, Proyectos, Formacion, Contacto],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-about />
      <app-tecnologias />
      <app-experiencia />
      <app-proyectos />
      <app-formacion />
      <app-contacto />
    </main>
    <footer class="border-t border-chalk">
      <div class="wrap py-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p class="text-[22px] font-semibold text-carbon">{{ p.nombre }}</p>
          <p class="mt-1 text-caption text-pencil">{{ p.rol }} · {{ p.ciudad }}</p>
        </div>
        <p class="text-caption text-fog">© {{ anio }} {{ p.nombre }}</p>
      </div>
    </footer>
  `,
})
export class App {
  p = PERFIL;
  anio = new Date().getFullYear();
}
