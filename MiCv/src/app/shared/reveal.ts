import { Directive, ElementRef, OnDestroy, afterNextRender, inject, input } from '@angular/core';

// Uso: <div appReveal [revealDelay]="120">  → aparece suavemente al entrar en pantalla
@Directive({ selector: '[appReveal]', standalone: true })
export class Reveal implements OnDestroy {
  revealDelay = input(0);
  private el: HTMLElement = inject(ElementRef).nativeElement;
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      this.el.classList.add('reveal-pending');
      this.el.style.transitionDelay = `${this.revealDelay()}ms`;
      this.observer = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
          this.el.classList.add('reveal-in');
          this.observer?.disconnect();
        }
      }, { threshold: 0.15 });
      this.observer.observe(this.el);
    });
  }

  ngOnDestroy() { this.observer?.disconnect(); }
}