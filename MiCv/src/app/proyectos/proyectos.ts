import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { PROYECTOS } from '../data/portfolio.data';

@Component({
  selector: 'app-proyectos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section id="proyectos" class="band">
      <div class="wrap">
        <p class="eyebrow">Proyectos</p>
        <h2 class="section-title">Lo que he construido</h2>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          @for (p of proyectos; track p.nombre; let i = $index) {
            <article appReveal [revealDelay]="(i % 3) * 100"
                     class="flex flex-col rounded-card border border-chalk bg-paper p-3">
              <!-- Captura si existe; si no, un lavado de color con icono -->
              <div class="relative h-44 overflow-hidden rounded-tile" [class]="lavados[i % lavados.length]">
                @if (p.imagen) {
                  <img [src]="p.imagen" [alt]="'Captura de ' + p.nombre"
                       width="1200" height="675" loading="lazy" decoding="async"
                       class="absolute inset-0 h-full w-full object-cover object-top" />
                } @else {
                  <span class="absolute inset-0 grid place-items-center text-iris">
                    <app-icon name="code" [size]="40" />
                  </span>
                }
              </div>

              <div class="flex grow flex-col p-4 pt-5">
                <h3 class="text-[22px] font-semibold text-ink leading-tight">{{ p.nombre }}</h3>
                @if (p.contexto) { <p class="mt-1.5 text-caption text-fog">{{ p.contexto }}</p> }
                <p class="mt-3 grow text-[15px] text-pencil">{{ p.descripcion }}</p>

                <ul class="mt-5 flex flex-wrap gap-1.5">
                  @for (t of p.tags; track t) { <li class="tag !text-[13px] !px-2.5 !py-0.5">{{ t }}</li> }
                </ul>

                @if (p.nota) { <p class="mt-4 text-caption text-fog">{{ p.nota }}</p> }

                <div class="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                  @if (p.demo) {
                    <a [href]="p.demo" target="_blank" rel="noopener" class="btn-primary !py-2.5 !px-5 text-[15px]">
                      Ver demo <app-icon name="arrow-up-right" [size]="16" />
                    </a>
                  }
                  @if (p.repo) {
                    <a [href]="p.repo" target="_blank" rel="noopener" class="btn-ghost">
                      <app-icon name="github" [size]="16" /> Ver código
                    </a>
                  }
                  @if (!p.repo && !p.demo) {
                    <span class="text-caption text-fog">Proyecto de empresa: el código no es público.</span>
                  }
                </div>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Proyectos {
  proyectos = PROYECTOS;
  lavados = ['bg-lavender', 'bg-mint', 'bg-blush'];
}
