import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { FORMACION } from '../data/portfolio.data';

@Component({
  selector: 'app-formacion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section id="formacion" class="band band-mist">
      <div class="wrap">
        <p class="eyebrow">Formación</p>
        <h2 class="section-title">Qué he estudiado</h2>

        <ol appReveal class="mt-10 rounded-card border border-ash bg-paper divide-y divide-ash">
          @for (f of estudios; track f.titulo; let i = $index) {
            <li class="flex flex-wrap items-start gap-x-5 gap-y-3 p-5 sm:p-6"
                [class]="i === 0 ? 'border-l-2 border-l-signal' : ''">
              <span class="text-lg font-medium text-fog w-6">{{ i + 1 }}.</span>
              <span class="icon-box"><app-icon name="graduation-cap" [size]="20" /></span>
              <div class="min-w-0 flex-1 basis-60">
                <h3 class="text-lg font-medium leading-snug" [class]="i === 0 ? 'text-signal' : 'text-ink'">{{ f.titulo }}</h3>
                <p class="mt-0.5 text-[15px] text-pencil">{{ f.centro }} · {{ f.nivel }}</p>
                @if (f.detalle) { <p class="mt-2 max-w-2xl text-[15px] text-pencil">{{ f.detalle }}</p> }
              </div>
              <p class="flex items-center gap-2 text-caption text-pencil sm:ml-auto">
                <app-icon name="calendar" [size]="15" /> {{ f.fecha }}
              </p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class Formacion {
  estudios = FORMACION;
}
