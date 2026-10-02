import { Component, computed, signal } from '@angular/core';
import { Icon } from '../shared/icon';
import { Reveal } from '../shared/reveal';
import { PERFIL } from '../data/portfolio.data';

type Estado = 'idle' | 'enviando' | 'ok' | 'error';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [Icon, Reveal],
  template: `
    <section id="contacto" class="py-20">
      <div appReveal class="glass rounded-[2rem] p-8 sm:p-12 grid gap-10 md:grid-cols-[2fr_3fr]">
        <!-- Datos de contacto -->
        <div>
          <h2 class="font-display text-3xl sm:text-4xl font-bold">¿Hablamos?</h2>
          <p class="mt-3 text-white/75">Escríbeme si buscas a alguien con ganas de aprender y aportar al equipo.</p>

          <ul class="mt-8 space-y-4">
            <li>
              <a [href]="'mailto:' + p.email" class="group flex items-center gap-3 text-white/85 hover:text-white">
                <span class="grid place-items-center size-10 rounded-xl bg-white/10 border border-white/15 text-aqua transition-colors group-hover:bg-white/20"><app-icon name="mail" [size]="18" /></span>
                {{ p.email }}
              </a>
            </li>
            <li>
              <a [href]="p.github" target="_blank" rel="noopener" class="group flex items-center gap-3 text-white/85 hover:text-white">
                <span class="grid place-items-center size-10 rounded-xl bg-white/10 border border-white/15 text-aqua transition-colors group-hover:bg-white/20"><app-icon name="github" [size]="18" /></span>
                GitHub
              </a>
            </li>
            <li class="flex items-center gap-3 text-white/85">
              <span class="grid place-items-center size-10 rounded-xl bg-white/10 border border-white/15 text-aqua"><app-icon name="map-pin" [size]="18" /></span>
              {{ p.ciudad }}
            </li>
          </ul>

          <p class="mt-8 text-sm text-white/60">Referencias de mis prácticas disponibles bajo petición.</p>
        </div>

        <!-- Formulario -->
        <div aria-live="polite">
          @if (estado() === 'ok') {
            <div class="h-full min-h-64 grid place-content-center text-center gap-3 rounded-2xl bg-white/10 border border-white/15 p-8">
              <span class="mx-auto text-aqua"><app-icon name="circle-check" [size]="44" /></span>
              <h3 class="font-display text-xl font-medium">Mensaje enviado</h3>
              <p class="text-white/70">Gracias por escribirme. Te responderé en cuanto pueda.</p>
              <button type="button" (click)="estado.set('idle')"
                      class="mx-auto mt-2 rounded-xl border border-white/25 px-5 py-2 text-sm hover:bg-white/10 transition-colors">
                Enviar otro mensaje
              </button>
            </div>
          } @else {
            <form (submit)="enviar($event)" class="space-y-4" novalidate>
              <div>
                <label for="nombre" class="block text-sm text-white/75 mb-1.5">Nombre</label>
                <input id="nombre" name="nombre" type="text" autocomplete="name" [value]="nombre()"
                       (input)="nombre.set($any($event.target).value)" [class]="campo" placeholder="Tu nombre">
              </div>
              <div>
                <label for="email" class="block text-sm text-white/75 mb-1.5">Correo electrónico</label>
                <input id="email" name="email" type="email" autocomplete="email" [value]="email()"
                       (input)="email.set($any($event.target).value)" [class]="campo" placeholder="tu@correo.com">
              </div>
              <div>
                <label for="mensaje" class="block text-sm text-white/75 mb-1.5">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="5" [value]="mensaje()"
                          (input)="mensaje.set($any($event.target).value)" [class]="campo + ' resize-y'"
                          placeholder="Cuéntame en qué puedo ayudarte (mínimo 10 caracteres)"></textarea>
              </div>

              <!-- Trampa para bots: las personas no lo ven -->
              <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" aria-hidden="true"
                     (change)="trampa.set($any($event.target).checked)">

              @if (estado() === 'error') {
                <p class="flex items-start gap-2 rounded-xl bg-iris/20 border border-iris/40 px-4 py-3 text-sm" role="alert">
                  <span class="shrink-0 text-iris"><app-icon name="circle-alert" [size]="18" /></span>
                  {{ error() }}
                </p>
              }

              <button type="submit" [disabled]="!valido() || estado() === 'enviando'"
                      class="inline-flex items-center gap-2 rounded-xl bg-white text-[#0b0b1e] font-medium px-6 py-3
                             transition-colors hover:bg-aqua disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed">
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
    </section>
  `,
})
export class Contacto {
  p = PERFIL;
  campo = 'w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 placeholder:text-white/40 transition-colors focus:border-aqua/70 focus:bg-white/15';

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