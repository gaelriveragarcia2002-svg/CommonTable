import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ThemeService } from '../services/theme.service';

@Component({
  standalone: true,
  selector: 'lib-test',
  imports: [ButtonModule, CardModule],
  template: ` <div class="flex flex-wrap gap-2">
    Hola desde shared papi UwU
    <p-button label="Soy un boton" severity="success" />
    <p-button label="Soy un boton" severity="contrast" />
    <p-button label="Soy un boton" severity="danger" />
    <p-button label="Soy un boton" severity="help" />
    <p-button label="Soy un boton" severity="info" />
    <p-button label="Soy un boton" severity="primary" />
    <p-button label="Soy un boton" severity="secondary" />
    <p-button label="Soy un boton" severity="warn" />
    <h1 class="text-primary-600">Hola Mundo UwU!</h1>
    <p-card> Soy una card </p-card>
  </div>`,
})
export class TestComponent {
  // * Inyeccion de dependencias.
  private readonly _ThemeService = inject(ThemeService);

  constructor() {
    setInterval(() => {
      this._ThemeService.change();
    }, 10000);
  }
}
