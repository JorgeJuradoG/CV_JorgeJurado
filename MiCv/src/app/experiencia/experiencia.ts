import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { EXPERIENCIA } from '../data/portfolio.data';

@Component({
  selector: 'app-experiencia',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section id="experiencia" class="band band-mist">
      <div class="wrap">
        <p class="eyebrow">Experiencia</p>
        <h2 class="section-title">Dónde he trabajado</h2>

        <ol class="mt-10 space-y-6">
          @for (e of trabajos; track e.puesto; let i = $index) {
            <li appReveal [revealDelay]="i * 80">
              <!-- La primera experiencia (la de desarrollo) se marca con el borde azul -->
              <article class="rounded-card border border-ash bg-paper p-6 sm:p-8"
                       [class]="i === 0 ? 'border-l-2 border-l-signal' : ''">
                <header class="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div class="flex gap-4">
                    <span class="pt-0.5 text-lg font-medium text-fog">{{ i + 1 }}.</span>
                    <div>
                      <h3 class="font-medium" [class]="i === 0 ? 'text-heading-sm text-signal' : 'text-sub text-ink'">{{ e.puesto }}</h3>
                      <p class="mt-1 text-pencil">{{ e.empresa }}</p>
                      @if (e.contexto) { <p class="mt-0.5 text-caption text-fog">{{ e.contexto }}</p> }
                    </div>
                  </div>
                  <p class="flex items-center gap-2 text-caption text-pencil">
                    <app-icon name="calendar" [size]="15" /> {{ e.fecha }}
                  </p>
                </header>

                <ul class="mt-6 grid gap-2.5 sm:pl-8" [class]="e.puntos.length > 5 ? 'md:grid-cols-2 md:gap-x-8' : ''">
                  @for (p of e.puntos; track p) {
                    <li class="flex gap-3 text-[15px]">
                      <span class="mt-0.5 shrink-0 text-leaf"><app-icon name="check" [size]="16" /></span>
                      <span>{{ p }}</span>
                    </li>
                  }
                </ul>

                @if (e.tags.length) {
                  <ul class="mt-6 flex flex-wrap gap-2 sm:pl-8">
                    @for (t of e.tags; track t) { <li class="tag">{{ t }}</li> }
                  </ul>
                }

                @if (e.nota) {
                  <div class="mt-6 sm:ml-8 rounded-tile bg-lavender p-5 text-[15px] space-y-4">
                    <p class="flex gap-3 text-pencil">
                      <span class="shrink-0 text-iris"><app-icon name="award" [size]="20" /></span>
                      <span>{{ e.nota }}</span>
                    </p>
                    @if (e.cita) {
                      <blockquote class="flex gap-3 border-t border-chalk pt-4">
                        <span class="shrink-0 text-iris"><app-icon name="quote" [size]="18" /></span>
                        <div>
                          <p class="text-ink">“{{ e.cita }}”</p>
                          <footer class="mt-1 text-caption text-fog">{{ e.citaAutor }}</footer>
                        </div>
                      </blockquote>
                    }
                  </div>
                }
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class Experiencia {
  trabajos = EXPERIENCIA;
}
