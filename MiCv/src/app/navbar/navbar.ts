import { Component, OnDestroy, signal, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav aria-label="Principal"
         class="glass fixed top-4 left-1/2 -translate-x-1/2 z-10 rounded-full px-2 py-1.5 flex gap-1 text-sm max-w-[95vw] overflow-x-auto">
      @for (l of links; track l.id) {
        <a [href]="'#' + l.id"
           class="px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
           [class]="active() === l.id ? 'bg-white/20' : 'hover:bg-white/10'"
           [attr.aria-current]="active() === l.id ? 'true' : null">{{ l.label }}</a>
      }
    </nav>
  `,
})
export class Navbar implements OnDestroy {
  links = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'tecnologias', label: 'Tecnologías' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'formacion', label: 'Formación' },
    { id: 'contacto', label: 'Contacto' },
  ];

  active = signal('inicio');
private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      this.observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
        { rootMargin: '-45% 0px -50% 0px' }
      );
      this.links.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el) this.observer!.observe(el);
      });
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}