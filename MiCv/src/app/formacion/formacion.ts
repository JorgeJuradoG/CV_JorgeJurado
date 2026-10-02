import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { FORMACION } from '../data/portfolio.data';

@Component({
  selector: 'app-formacion',
  standalone: true,
  imports: [Icon, Reveal],
  template: `
    <section id="formacion" class="py-16">
      <h2 class="font-display text-3xl font-bold mb-8">Formación</h2>

      <ol class="relative border-l border-white/20 ml-3 space-y-5">
        @for (f of estudios; track f.titulo; let i = $index) {
          <li class="pl-8 relative">
            <span class="absolute -left-[7px] top-7 size-3 rounded-full bg-coral shadow-[0_0_14px_var(--color-coral)]"></span>

            <article appReveal [revealDelay]="i * 100"
                     class="glass rounded-3xl p-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-3
                            transition-transform duration-300 hover:translate-x-1">
              <div class="flex items-center gap-4">
                <span class="grid place-items-center size-11 shrink-0 rounded-2xl border border-white/20 text-white"
                      [class]="i === 0 ? 'bg-gradient-to-br from-violet/60 to-coral/60' : 'bg-white/10'">
                  <app-icon name="graduation-cap" [size]="22" />
                </span>
                <div>
                  <h3 class="font-display text-lg font-medium leading-snug">{{ f.titulo }}</h3>
                  <p class="text-white/65 text-sm">{{ f.centro }}</p>
                </div>
              </div>
              <p class="flex items-center gap-2 text-sm text-white/70 rounded-full bg-white/10 border border-white/15 px-3 py-1">
                <app-icon name="calendar" [size]="14" /> {{ f.fecha }}
              </p>
            </article>
          </li>
        }
      </ol>
    </section>
  `,
})
export class Formacion {
  estudios = FORMACION;
}