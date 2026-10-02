import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { TECNOLOGIAS } from '../data/portfolio.data';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [Icon, Reveal],
  template: `
    <section id="tecnologias" class="py-20">
      <h2 class="section-title">Tecnologías</h2>

      <div class="grid gap-5 sm:grid-cols-2">
        @for (g of grupos; track g.titulo; let i = $index) {
          <article appReveal [revealDelay]="(i % 2) * 120" class="glass rounded-2xl p-6" [class]="ocupaFila(i) ? 'sm:col-span-2' : ''">
            <header class="flex items-center gap-3 mb-5">
              <span class="grid place-items-center size-10 rounded-xl bg-white/10 border border-white/15 text-aqua">
                <app-icon [name]="g.icono" [size]="20" />
              </span>
              <h3 class="font-display text-xl font-medium">{{ g.titulo }}</h3>
            </header>

            <ul class="flex flex-wrap gap-2">
              @for (t of g.items; track t) {
                <li class="chip rounded-lg bg-white/10 border border-white/15 px-3.5 py-1.5 text-sm
                           transition duration-200 hover:-translate-y-0.5 hover:border-aqua/60 hover:bg-white/15
                           ">{{ t }}</li>
              }
            </ul>

            @if (g.aval) {
              <p class="mt-5 flex gap-2.5 border-t border-white/15 pt-4 text-sm text-white/70">
                <span class="mt-0.5 shrink-0 text-iris"><app-icon name="award" [size]="16" /></span>
                {{ g.aval }}
              </p>
            }
          </article>
        }
      </div>
    </section>
  `,
})
export class Tecnologias {
  grupos = TECNOLOGIAS;
  ocupaFila(i: number) { return i === this.grupos.length - 1 && this.grupos.length % 2 === 1; }
}