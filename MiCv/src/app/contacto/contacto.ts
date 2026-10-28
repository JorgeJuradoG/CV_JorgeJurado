import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { PERFIL } from '../data/portfolio.data';

type Estado = 'idle' | 'enviando' | 'ok' | 'error';

@Component({
  selector: 'app-contacto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icon, Reveal],
  template: `
    <section id="contacto" class="band">
      <div class="wrap">
        <div appReveal class="rounded-tool bg-lavender p-6 sm:p-12 grid gap-10 md:grid-cols-[2fr_3fr]">
          <!-- Datos de contacto -->
          <div>
            <p class="eyebrow">Contacto</p>
            <h2 class="section-title">¿Hablamos?</h2>
            <p class="mt-4 text-lg text-pencil">Escríbeme si buscas a alguien con ganas de aprender y <span class="text-signal">aportar al equipo</span>.</p>

            <ul class="mt-8 space-y-3">
              <li>
                <a [href]="'mailto:' + p.email" class="group flex items-center gap-3 hover:text-signal">
                  <span class="icon-box"><app-icon name="mail" [size]="18" /></span>
                  <span class="break-all">{{ p.email }}</span>
                </a>
              </li>
              <li>
                <a [href]="p.github" target="_blank" rel="noopener" class="group flex items-center gap-3 hover:text-signal">
                  <span class="icon-box"><app-icon name="github" [size]="18" /></span>
                  GitHub
                </a>
              </li>
              @if (p.linkedin) {
                <li>
                  <a [href]="p.linkedin" target="_blank" rel="noopener" class="group flex items-center gap-3 hover:text-signal">
                    <span class="icon-box"><app-icon name="linkedin" [size]="18" /></span>
                    LinkedIn
                  </a>
                </li>
              }
              <li class="flex items-center gap-3">
                <span class="icon-box"><app-icon name="map-pin" [size]="18" /></span>
                {{ p.ciudad }}
              </li>
            </ul>

            @if (p.cvPdf) {
              <a [href]="p.cvPdf" download class="btn-ghost mt-6"><app-icon name="download" [size]="18" /> Descargar CV en PDF</a>
            }
            <p class="mt-6 text-caption text-fog">Referencias de mis prácticas disponibles bajo petición.</p>
          </div>

          <!-- Formulario -->
          <div aria-live="polite" class="rounded-card border border-chalk bg-paper p-6 sm:p-8">
            @if (estado() === 'ok') {
              <div class="h-full min-h-64 grid place-content-center text-center gap-3">
                <span class="mx-auto grid size-14 place-items-center rounded-full bg-mint text-leaf"><app-icon name="check" [size]="28" /></span>
                <h3 class="text-heading-sm font-medium">Mensaje enviado</h3>
                <p class="text-pencil">Gracias por escribirme. Te responderé en cuanto pueda.</p>
                <button type="button" (click)="estado.set('idle')" class="btn-ghost mx-auto">
                  Enviar otro mensaje
                </button>
              </div>
            } @else {
              <form (submit)="enviar($event)" class="space-y-5" novalidate>
                <div>
                  <label for="nombre" class="block text-caption font-medium mb-1.5">Nombre</label>
                  <input id="nombre" name="nombre" type="text" autocomplete="name" [value]="nombre()"
                         (input)="nombre.set($any($event.target).value)" [class]="campo" placeholder="Tu nombre">
                </div>
                <div>
                  <label for="email" class="block text-caption font-medium mb-1.5">Correo electrónico</label>
                  <input id="email" name="email" type="email" autocomplete="email" [value]="email()"
                         (input)="email.set($any($event.target).value)" [class]="campo" placeholder="tu@correo.com">
                </div>
                <div>
                  <label for="mensaje" class="block text-caption font-medium mb-1.5">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows="5" [value]="mensaje()"
                            (input)="mensaje.set($any($event.target).value)" [class]="campo + ' resize-y'"
                            placeholder="Cuéntame en qué puedo ayudarte (mínimo 10 caracteres)"></textarea>
                </div>

                <!-- Trampa para bots: las personas no lo ven -->
                <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" aria-hidden="true"
                       (change)="trampa.set($any($event.target).checked)">

                @if (estado() === 'error') {
                  <p class="flex items-start gap-2 rounded-input bg-blush px-4 py-3 text-caption" role="alert">
                    <span class="shrink-0"><app-icon name="circle-alert" [size]="18" /></span>
                    {{ error() }}
                  </p>
                }

                <button type="submit" [disabled]="!valido() || estado() === 'enviando'"
                        class="btn-primary disabled:opacity-50 disabled:hover:bg-signal disabled:cursor-not-allowed">
                  @if (estado() === 'enviando') {
                    <span class="animate-spin motion-reduce:animate-none"><app-icon name="loader-circle" [size]="18" /></span>
                    Enviando…
                  } @else {
                    <app-icon name="send" [size]="18" /> Enviar mensaje
                  }
                </button>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class Contacto {
  p = PERFIL;
  campo = 'w-full rounded-input bg-paper border border-chalk px-4 py-3 placeholder:text-haze transition-colors focus:border-signal focus:outline-none';

  nombre = signal('');
  email = signal('');
  mensaje = signal('');
  trampa = signal(false);
  estado = signal<Estado>('idle');
  error = signal('');

  valido = computed(
    () => this.nombre().trim().length > 1 &&
          /^\S+@\S+\.\S+$/.test(this.email().trim()) &&
          this.mensaje().trim().length >= 10
  );

  async enviar(ev: Event) {
    ev.preventDefault();
    if (!this.valido() || this.estado() === 'enviando') return;

    if (this.p.formKey === 'TU_ACCESS_KEY') {
      this.fallo('El formulario aún no tiene la clave de Web3Forms. Mientras tanto, escríbeme por correo.');
      return;
    }

    this.estado.set('enviando');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: this.p.formKey,
          subject: `Mensaje desde tu portfolio de ${this.nombre().trim()}`,
          from_name: 'Portfolio',
          name: this.nombre().trim(),
          email: this.email().trim(),
          message: this.mensaje().trim(),
          botcheck: this.trampa(),
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message);

      this.nombre.set(''); this.email.set(''); this.mensaje.set('');
      this.estado.set('ok');
    } catch {
      this.fallo('No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por correo.');
    }
  }

  private fallo(msg: string) {
    this.error.set(msg);
    this.estado.set('error');
  }
}