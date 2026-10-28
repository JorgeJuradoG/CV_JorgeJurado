import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PERFIL } from '../data/portfolio.data';
import { Icon } from '../shared/icon';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon],
  template: `
    <section id="inicio" class="band-mist">
      <div class="wrap rise grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <!-- Presentación -->
        <div>
          <p class="eyebrow">{{ p.rol }} · {{ p.ciudad }}</p>
          <h1 class="mt-4 text-[44px] leading-[1] sm:text-[56px] lg:text-display font-normal">
            Hola, soy {{ p.nombre }}. Creo <span class="text-signal">aplicaciones web</span> con Angular.
          </h1>
          <p class="mt-6 text-lg text-pencil max-w-xl leading-[1.43]">
            Trabajo con Angular, TypeScript y Firebase, en equipo con Scrum y Git. También construyo proyectos full stack con React y Node.js.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="#contacto" class="btn-primary">Contactar</a>
            @if (p.cvPdf) {
              <a [href]="p.cvPdf" download class="btn-ghost"><app-icon name="download" [size]="18" /> Descargar CV</a>
            } @else {
              <a href="#proyectos" class="btn-ghost">Ver proyectos <app-icon name="arrow-right" [size]="18" /></a>
            }
          </div>

          <p class="mt-8 flex items-start gap-2.5 text-[15px] text-pencil max-w-lg">
            <span class="mt-px grid size-5 shrink-0 place-items-center rounded-full bg-mint text-leaf"><app-icon name="check" [size]="13" /></span>
            {{ p.avalHero }}
          </p>
        </div>

        <!-- Ficha de CV ligeramente girada, con chips de habilidades flotando -->
        <div class="relative mx-auto w-full max-w-sm lg:max-w-none py-6">
          <aside class="rotate-[-2deg] rounded-card border border-chalk bg-paper p-6 sm:p-7">
            <div class="flex items-center gap-4">
              @if (p.foto) {
                <img [src]="p.foto" [alt]="p.nombre" width="64" height="64" class="size-16 rounded-full object-cover">
              } @else {
                <span class="grid place-items-center size-16 rounded-full bg-lavender text-iris text-xl font-semibold">
                  {{ iniciales }}
                </span>
              }
              <div>
                <p class="text-lg font-semibold text-carbon leading-tight">{{ p.nombre }}</p>
                <p class="text-caption text-pencil">{{ p.rol }}</p>
              </div>
            </div>

            <ul class="mt-6 space-y-3 border-t border-ash pt-5 text-[15px]">
              @for (d of datos; track d.texto) {
                <li class="flex items-center gap-3">
                  <span class="text-fog shrink-0"><app-icon [name]="d.icono" [size]="18" /></span>
                  <span class="truncate">{{ d.texto }}</span>
                </li>
              }
            </ul>

            <p class="mt-6 inline-flex items-center gap-2 rounded-tile bg-mint px-3 py-1.5 text-caption font-medium text-leaf">
              <app-icon name="graduation-cap" [size]="16" /> Grado Superior en DAW
            </p>
          </aside>

          @for (c of chips; track c.texto) {
            <span class="absolute rounded-tool border border-chalk bg-paper/85 backdrop-blur px-3.5 py-1.5 text-caption font-medium"
                  [class]="c.pos">{{ c.texto }}</span>
          }
        </div>
      </div>
    </section>

    <!-- Cifras -->
    <div class="wrap">
      <ul class="grid gap-6 py-10 sm:grid-cols-3 border-b border-ash">
        @for (c of p.cifras; track c.texto) {
          <li class="flex items-baseline gap-3">
            <span class="self-center text-signal"><app-icon [name]="c.icono" [size]="20" /></span>
            <span class="text-heading font-medium text-signal">{{ c.numero }}</span>
            <span class="text-ink leading-tight">{{ c.texto }}</span>
          </li>
        }
      </ul>
    </div>
  `,
})
export class Hero {
  p = PERFIL;
  iniciales = this.p.nombre.split(' ').slice(0, 2).map((x) => x[0]).join('');
  datos = [
    { icono: 'map-pin', texto: 'Marbella, Málaga' },
    { icono: 'code', texto: 'Angular · TypeScript · Firebase' },
    { icono: 'languages', texto: 'Inglés B2 (Cambridge)' },
    { icono: 'mail', texto: this.p.email },
  ];
  chips = [
    { texto: 'Angular', pos: '-top-1 right-6 rotate-[3deg]' },
    { texto: 'Firebase', pos: 'bottom-1 right-8 rotate-[2deg]' },
    { texto: 'TypeScript', pos: 'bottom-0 left-4 rotate-[-3deg]' },
  ];
}
