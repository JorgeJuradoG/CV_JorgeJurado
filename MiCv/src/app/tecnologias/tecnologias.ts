import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { TECNOLOGIAS } from '../data/portfolio.data';

@Component({
  selector: 'app-tecnologias',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section id="tecnologias" class="band">
      <div class="wrap">
        <p class="eyebrow">Tecnologías</p>
        <h2 class="section-title">Con qué trabajo</h2>

        <div class="mt-10 grid gap-6 sm:grid-cols-2">
          @for (g of grupos; track g.titulo; let i = $index) {
            <article appReveal [revealDelay]="(i % 2) * 100"
                     class="flex flex-col rounded-tool p-6"
                     [class]="lavados[i % lavados.length] + (ocupaFila(i) ? ' sm:col-span-2' : '')">
              <header class="mb-5 flex items-center gap-3">
                <span class="text-iris"><app-icon [name]="g.icono" [size]="28" /></span>
                <h3 class="text-[22px] font-semibold text-ink">{{ g.titulo }}</h3>
              </header>

              <ul class="flex grow flex-wrap content-start gap-2" [attr.aria-label]="'Tecnologías de ' + g.titulo">
                @for (t of g.items; track t) {
                  <li class="tag">{{ t }}</li>
                }
              </ul>

              @if (g.aval) {
                <p class="mt-5 flex gap-2.5 text-[15px] text-pencil">
                  <span class="mt-0.5 shrink-0 text-leaf"><app-icon name="circle-check" [size]="17" /></span>
                  {{ g.aval }}
                </p>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Tecnologias {
  grupos = TECNOLOGIAS;
  lavados = ['bg-lavender', 'bg-mint', 'bg-blush', 'bg-mist'];
  ocupaFila(i: number) { return i === this.grupos.length - 1 && this.grupos.length % 2 === 1; }
}
