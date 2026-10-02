import { Component } from '@angular/core';
import { PERFIL } from '../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  styles: [`
    /* Brillo que sigue al puntero dentro del cristal */
    .spotlight::before {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(420px circle at var(--x, 70%) var(--y, 20%), rgb(255 255 255 / .16), transparent 60%);
    }
    .spotlight > * { position: relative; }
  `],
  template: `
    <section id="inicio" class="min-h-screen flex items-center pt-24">
      <div class="glass spotlight rise relative overflow-hidden rounded-[2rem] p-8 sm:p-14 w-full"
           (pointermove)="follow($event)">
        <p class="text-aqua mb-4">Marbella · Desarrollador web junior</p>
        <h1 class="font-display font-bold text-5xl sm:text-7xl leading-[1.02] tracking-tight">Jorge Jurado</h1>
        <p class="mt-6 text-lg sm:text-xl text-white/75 max-w-xl">
          Creo aplicaciones web con Angular y Firebase, trabajando en equipo con Scrum y Git.
        </p>
        <div class="mt-9 flex flex-wrap gap-3">
          <a href="#contacto"
             class="rounded-full bg-white text-[#0b0b1e] font-medium px-6 py-3 hover:bg-aqua transition-colors">Contactar</a>
          <a [href]="p.github" target="_blank" rel="noopener"
             class="glass rounded-full px-6 py-3 hover:bg-white/10 transition-colors">Ver GitHub</a>
        </div>
      </div>
    </section>
  `,
})
export class Hero {
  p = PERFIL;
  follow(e: PointerEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  }
}