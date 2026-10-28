import { ChangeDetectionStrategy, Component, OnDestroy, afterNextRender, signal } from '@angular/core';
import { PERFIL } from '../data/portfolio.data';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="sticky top-0 z-20 bg-paper border-b border-chalk">
      <div class="wrap flex h-16 items-center gap-6">
        <a href="#inicio" class="shrink-0 text-lg font-semibold text-carbon">{{ nombre }}</a>

        <nav aria-label="Principal" class="hidden md:flex flex-1 justify-center gap-1">
          @for (l of links; track l.id) {
            <a [href]="'#' + l.id"
               class="px-3 py-2 transition-colors whitespace-nowrap"
               [class]="active() === l.id ? 'text-signal' : 'text-ink hover:text-signal'"
               [attr.aria-current]="active() === l.id ? 'true' : null">{{ l.label }}</a>
          }
        </nav>

        <div class="ml-auto md:ml-0 flex items-center gap-4">
          <span class="hidden md:block h-6 w-px bg-haze" aria-hidden="true"></span>
          <a href="#contacto" class="btn-primary !py-2.5 !px-5 text-[15px]">Contactar</a>
        </div>
      </div>

      <!-- En móvil, los enlaces van en una fila desplazable -->
      <nav aria-label="Secciones" class="md:hidden border-t border-ash overflow-x-auto">
        <div class="wrap flex gap-1 py-1 text-caption">
          @for (l of links; track l.id) {
            <a [href]="'#' + l.id" class="px-2.5 py-1.5 whitespace-nowrap"
               [class]="active() === l.id ? 'text-signal' : 'text-pencil'">{{ l.label }}</a>
          }
        </div>
      </nav>
    </header>
  `,
})
export class Navbar implements OnDestroy {
  nombre = PERFIL.nombre;
  links = [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'formacion', label: 'Formación' },
    { id: 'contacto', label: 'Contacto' },
  ];

  active = signal('');
  private observer?: IntersectionObserver;

  constructor() {
    // afterNextRender solo se ejecuta en el navegador, no en el servidor (SSR),
    // donde IntersectionObserver no existe.
    afterNextRender(() => {
      this.observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
        { rootMargin: '-45% 0px -50% 0px' } // marca la sección que cruza el centro de la pantalla
      );
      ['inicio', ...this.links.map((l) => l.id)].forEach((id) => {
        const el = document.getElementById(id);
        if (el) this.observer!.observe(el);
      });
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
