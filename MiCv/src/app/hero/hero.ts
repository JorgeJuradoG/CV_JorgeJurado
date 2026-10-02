import { Component } from '@angular/core';
import { PERFIL } from '../data/portfolio.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Icon],
  styles: [`
    /* Brillo suave que sigue al puntero dentro del cristal */
    .spotlight::before {
      content: ''; position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(360px circle at var(--x, 70%) var(--y, 20%), rgb(255 255 255 / .12), transparent 60%);
    }
    .spotlight > * { position: relative; }
  `],
  template: `
    <section id="inicio" class="min-h-screen flex items-center pt-28 pb-10">
      <div class="rise grid w-full gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <!-- Presentación -->
        <div>
          <p class="text-aqua text-lg font-medium">{{ p.rol }}</p>
          <h1 class="mt-3 font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">{{ p.nombre }}</h1>
          <p class="mt-6 text-lg sm:text-xl text-white/70 max-w-xl">
            Creo aplicaciones web con Angular y Firebase, trabajando en equipo con Scrum y Git.
          </p>

          <p class="mt-6 inline-flex items-start gap-2.5 rounded-xl bg-white/[.06] border border-white/12 px-4 py-2.5 text-sm text-white/80">
            <span class="mt-0.5 shrink-0 text-aqua"><app-icon name="award" [size]="18" /></span>
            {{ p.avalHero }}
          </p>

          <div class="mt-9 flex flex-wrap gap-3">
            <a href="#contacto"
               class="inline-flex items-center gap-2 rounded-xl bg-white text-[#070a16] font-medium px-6 py-3 hover:bg-aqua transition-colors">
              <app-icon name="mail" [size]="18" /> Contactar
            </a>
            <a [href]="p.github" target="_blank" rel="noopener"
               class="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 hover:bg-white/10 transition-colors">
              <app-icon name="github" [size]="18" /> GitHub
            </a>
          </div>
        </div>

        <!-- Ficha de perfil -->
        <aside class="glass spotlight relative overflow-hidden rounded-3xl p-7" (pointermove)="follow($event)">
          <div class="flex items-center gap-4">
            @if (p.foto) {
              <img [src]="p.foto" [alt]="p.nombre" class="size-16 rounded-2xl object-cover border border-white/20">
            } @else {
              <span class="grid place-items-center size-16 rounded-2xl border border-white/20 bg-white/10 font-display text-xl font-semibold">
                {{ iniciales }}
              </span>
            }
            <div>
              <p class="font-display font-medium text-lg leading-tight">{{ p.nombre }}</p>
              <p class="text-sm text-white/60">{{ p.rol }}</p>
            </div>
          </div>

          <ul class="mt-7 space-y-3.5 border-t border-white/12 pt-6 text-sm text-white/80">
            @for (d of datos; track d.texto) {
              <li class="flex items-center gap-3">
                <span class="text-aqua shrink-0"><app-icon [name]="d.icono" [size]="18" /></span>
                {{ d.texto }}
              </li>
            }
          </ul>
        </aside>
      </div>
    </section>
  `,
})
export class Hero {
  p = PERFIL;
  iniciales = this.p.nombre.split(' ').slice(0, 2).map((x) => x[0]).join('');
  datos = [
    { icono: 'map-pin', texto: this.p.ciudad },
    { icono: 'code', texto: 'Angular · TypeScript · Firebase' },
    { icono: 'languages', texto: 'Inglés B2 (Cambridge)' },
    { icono: 'mail', texto: this.p.email },
  ];

  follow(e: PointerEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - r.left}px`);
    el.style.setProperty('--y', `${e.clientY - r.top}px`);
  }
}