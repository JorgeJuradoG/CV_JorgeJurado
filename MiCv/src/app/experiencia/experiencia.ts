import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { EXPERIENCIA } from '../data/portfolio.data';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [Icon, Reveal],
  template: `
    <section id="experiencia" class="py-16">
      <h2 class="font-display text-3xl font-bold mb-8">Experiencia</h2>

      <ol class="relative border-l border-white/20 ml-3 space-y-8">
        @for (e of trabajos; track e.puesto; let i = $index) {
          <li class="pl-8 relative">
            <!-- Punto de la línea de tiempo; el trabajo actual late suavemente -->
            <span class="absolute -left-[7px] top-8 size-3">
              @if (esActual(e.fecha)) {
                <span class="absolute inset-0 rounded-full bg-aqua opacity-70 animate-ping motion-reduce:animate-none"></span>
              }
              <span class="absolute inset-0 rounded-full bg-aqua shadow-[0_0_14px_var(--color-aqua)]"></span>
            </span>

            <article appReveal [revealDelay]="i * 100" class="glass rounded-3xl p-6" [class]="i === 0 ? 'sm:p-8' : ''">
              <header class="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div class="flex items-center gap-3">
                  <span class="grid place-items-center size-10 shrink-0 rounded-xl bg-white/10 border border-white/15 text-aqua">
                    <app-icon name="briefcase" [size]="20" />
                  </span>
                  <div>
                    <h3 class="font-display font-medium" [class]="i === 0 ? 'text-2xl' : 'text-xl'">{{ e.puesto }}</h3>
                    <p class="text-white/65 text-sm">{{ e.empresa }}</p>
                  </div>
                </div>
                <p class="flex items-center gap-2 text-sm text-white/70 rounded-full bg-white/10 border border-white/15 px-3 py-1">
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

              @if (e.nota) {
                <p class="mt-6 flex gap-3 rounded-2xl bg-white/10 border border-white/15 p-4 text-sm text-white/85">
                  <span class="text-coral shrink-0"><app-icon name="award" [size]="20" /></span>
                  <span>{{ e.nota }}</span>
                </p>
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