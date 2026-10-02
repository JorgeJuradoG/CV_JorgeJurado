import { Component } from '@angular/core';

// Orbes de color fijos detrás de todo: son lo que "ve" el cristal a través del desenfoque.
@Component({
  selector: 'app-background',
  standalone: true,
  template: `
    <div aria-hidden="true">
      <div class="orb bg-violet w-[40rem] h-[40rem] -top-40 -left-40"></div>
      <div class="orb bg-iris w-[30rem] h-[30rem] top-1/3 -right-32" style="animation-delay:-8s"></div>
      <div class="orb bg-aqua w-[34rem] h-[34rem] -bottom-40 left-1/4" style="animation-delay:-14s"></div>
    </div>
  `,
})
export class Background {}