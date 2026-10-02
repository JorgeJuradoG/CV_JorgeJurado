import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { PROYECTOS } from '../data/portfolio.data';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [Icon, Reveal],
  template: `
    <section id="proyectos" class="py-16">
      <h2 class="font-display text-3xl font-bold mb-6">Proyectos</h2>

      <div class="grid gap-5 md:grid-cols-2">
        @for (p of proyectos; track p.nombre; let i = $index) {
          <article appReveal [revealDelay]="(i % 2) * 120"
                   class="group glass rounded-3xl p-3 flex flex-col transition-transform duration-300 hover:-translate-y-1">
            <!-- Zona visual: sustitúyela por una captura cuando tengas una -->
            <div class="relative h-36 rounded-2xl overflow-hidden bg-gradient-to-br border border-white/15"
                 [class]="gradientes[i % gradientes.length]">
              <span class="absolute inset-0 grid place-items-center text-white/80 transition-transform duration-500 group-hover:scale-110">
                <app-icon name="code" [size]="44" />
              </span>
            </div>

            <div class="p-4 pt-5 flex flex-col grow">
              <h3 class="font-display text-xl font-medium">{{ p.nombre }}</h3>
              <p class="mt-2 text-white/75 grow">{{ p.descripcion }}</p>

              <ul class="mt-4 flex flex-wrap gap-2">
                @for (t of p.tags; track t) {
                  <li class="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-sm text-white/80">{{ t }}</li>
                }
              </ul>

              <div class="mt-5 flex flex-wrap items-center gap-3">
                @if (p.repo) {
                  <a [href]="p.repo" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-2 rounded-full bg-white text-[#0b0b1e] font-medium px-4 py-2 text-sm hover:bg-aqua transition-colors">
                    <app-icon name="github" [size]="16" /> Ver código
                  </a>
                }
                @if (p.demo) {
                  <a [href]="p.demo" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm hover:bg-white/10 transition-colors">
                    Ver demo <app-icon name="arrow-up-right" [size]="16" />
                  </a>
                }
                @if (!p.repo && !p.demo) {
                  <span class="text-sm text-white/55">Proyecto de empresa: el código no es público.</span>
                }
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class Proyectos {
  proyectos = PROYECTOS;
  gradientes = [
    'from-violet/60 to-coral/50',
    'from-coral/50 to-aqua/50',
    'from-aqua/50 to-violet/60',
  ];
}