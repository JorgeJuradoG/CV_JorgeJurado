import { Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { PERFIL } from '../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Icon, Reveal],
  template: `
    <section id="sobre-mi" class="py-16">
      <h2 class="font-display text-3xl font-bold mb-6">Sobre mí</h2>

      <div appReveal class="glass rounded-3xl p-8 grid gap-8 md:grid-cols-[3fr_2fr]">
        <p class="text-white/80 leading-relaxed text-lg max-w-prose">{{ p.resumen }}</p>
        <ul class="space-y-4">
          @for (d of p.datos; track d.texto) {
            <li class="flex items-start gap-3 text-white/80">
              <span class="grid place-items-center size-9 shrink-0 rounded-xl bg-white/10 border border-white/15 text-aqua">
                <app-icon [name]="d.icono" [size]="18" />
              </span>
              <span class="pt-1.5">{{ d.texto }}</span>
            </li>
          }
        </ul>
      </div>

      <div class="mt-5 grid gap-5 md:grid-cols-3">
        @for (f of p.fortalezas; track f.titulo; let i = $index) {
          <article appReveal [revealDelay]="i * 120"
                   class="glass rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <span class="grid place-items-center size-11 rounded-2xl bg-gradient-to-br from-violet/60 to-coral/60 border border-white/20">
              <app-icon [name]="f.icono" [size]="22" />
            </span>
            <h3 class="font-display text-lg font-medium mt-4">{{ f.titulo }}</h3>
            <p class="mt-1 text-white/70">{{ f.texto }}</p>
          </article>
        }
      </div>
    </section>
  `,
})
export class About {
  p = PERFIL;
}