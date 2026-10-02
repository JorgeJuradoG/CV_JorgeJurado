import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { EXPERIENCIA } from '../data/portfolio.data';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [Icon, Reveal],
  template: `
    <section id="experiencia" class="py-20">
      <h2 class="section-title">Experiencia</h2>

      <ol class="relative border-l border-white/20 ml-3 space-y-8">
        @for (e of trabajos; track e.puesto; let i = $index) {
          <li class="pl-8 relative">
            <!-- Punto de la línea de tiempo; el trabajo actual late suavemente -->
            <span class="absolute -left-[7px] top-8 size-3">
              @if (esActual(e.fecha)) {
                <span class="absolute inset-0 rounded-full bg-aqua opacity-70 animate-ping motion-reduce:animate-none"></span>
              }
              <span class="absolute inset-0 rounded-full bg-aqua ring-4 ring-aqua/15"></span>
            </span>

            <article appReveal [revealDelay]="i * 100" class="glass rounded-2xl p-6" [class]="i === 0 ? 'sm:p-8' : ''">
              <header class="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div class="flex items-center gap-3">
                  <span class="grid place-items-center size-10 shrink-0 rounded-xl bg-white/10 border border-white/15 text-aqua">
                    <app-icon name="briefcase" [size]="20" />
                  </span>
                  <div>
                    <h3 class="font-display font-medium" [class]="i === 0 ? 'text-2xl' : 'text-xl'">{{ e.puesto }}</h3>
                    <p class="text-white/65 text-sm">{{ e.empresa }}</p>
                    @if (e.contexto) { <p class="text-aqua/90 text-sm">{{ e.contexto }}</p> }
                  </div>
                </div>
                <p class="flex items-center gap-2 text-sm text-white/70 rounded-lg bg-white/10 border border-white/15 px-3 py-1">
                  <app-icon name="calendar" [size]="14" /> {{ e.fecha }}
                </p>
              </header>

              <ul class="mt-5 space-y-2 text-white/80">
                @for (p of e.puntos; track p) {
                  <li class="flex gap-3">
                    <span class="mt-1 text-aqua shrink-0"><app-icon name="check" [size]="16" /></span>
                    <span>{{ p }}</span>
                  </li>
                }
              </ul>

              @if (e.tags.length) {
                <ul class="mt-5 flex flex-wrap gap-2">
                  @for (t of e.tags; track t) {
                    <li class="rounded-lg bg-white/10 border border-white/15 px-3 py-1 text-xs text-white/80">{{ t }}</li>
                  }
                </ul>
              }

              @if (e.nota) {
                <div class="mt-6 rounded-2xl bg-white/10 border border-white/15 p-4 text-sm text-white/85 space-y-3">
                  <p class="flex gap-3">
                    <span class="text-iris shrink-0"><app-icon name="award" [size]="20" /></span>
                    <span>{{ e.nota }}</span>
                  </p>
                  @if (e.cita) {
                    <blockquote class="flex gap-3 border-t border-white/15 pt-3">
                      <span class="text-aqua shrink-0"><app-icon name="quote" [size]="18" /></span>
                      <div>
                        <p class="text-white/90">“{{ e.cita }}”</p>
                        <footer class="mt-1 text-white/60">{{ e.citaAutor }}</footer>
                      </div>
                    </blockquote>
                  }
                </div>
              }
            </article>
          </li>
        }
      </ol>
    </section>
  `,
})
export class Experiencia {
  trabajos = EXPERIENCIA;
  esActual(fecha: string) { return fecha.toLowerCase().includes('actualidad'); }
}