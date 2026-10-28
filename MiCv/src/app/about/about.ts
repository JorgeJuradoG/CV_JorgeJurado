import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { PERFIL } from '../data/portfolio.data';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section id="sobre-mi" class="band">
      <div class="wrap">
        <p class="eyebrow">Sobre mí</p>
        <div appReveal class="mt-2 grid gap-10 md:grid-cols-[3fr_2fr]">
          <div>
            <h2 class="section-title">Ganas de aprender y de <span class="text-signal">aportar al equipo</span></h2>
            <p class="mt-6 text-lg text-pencil leading-[1.43] max-w-prose">{{ p.resumen }}</p>
          </div>
          <ul class="self-end rounded-card border border-ash divide-y divide-ash">
            @for (d of p.datos; track d.texto) {
              <li class="flex items-center gap-4 px-5 py-4">
                <span class="icon-box"><app-icon [name]="d.icono" [size]="18" /></span>
                {{ d.texto }}
              </li>
            }
          </ul>
        </div>
      </div>
    </section>

    <!-- Fortalezas: fila de cuatro fichas sobre fondo Mist -->
    <div class="band-mist py-16">
      <ul class="wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        @for (f of p.fortalezas; track f.titulo; let i = $index) {
          <li appReveal [revealDelay]="i * 100" class="rounded-tile border border-chalk bg-paper p-6">
            <span class="text-signal"><app-icon [name]="f.icono" [size]="28" /></span>
            <h3 class="mt-4 text-lg font-medium text-ink">{{ f.titulo }}</h3>
            <p class="mt-1.5 text-[15px] text-pencil">{{ f.texto }}</p>
          </li>
        }
      </ul>
    </div>
  `,
})
export class About {
  p = PERFIL;
}
