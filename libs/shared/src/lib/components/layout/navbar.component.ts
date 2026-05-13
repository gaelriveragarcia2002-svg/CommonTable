import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { EnvironmentService } from '../../services/environment.service';

@Component({
  standalone: true,
  selector: 'lib-navbar',
  imports: [ButtonModule, CardModule, InputTextModule],
  template: `
    <nav
      class="
      flex items-center justify-between gap-4
      rounded-xl px-4 md:px-8 mx-2 md:mx-4 py-3 mt-1
      bg-surface-50 shadow-sm border border-l border-primary-800 dark:bg-primary-900
    "
    >
      <!-- Start: saludo -->
      <div class="hidden sm:block shrink-0">
        <p class="text-base leading-tight">
          Buenos días, <span class="text-primary-500 font-semibold">Gael</span>
        </p>
      </div>

      <!-- Center: links (reservado) -->
      <div class="flex-1"></div>

      <!-- End: acciones -->
      <div class="flex items-center gap-2 md:gap-3 shrink-0">
        <!-- Buscador — oculto en móvil muy pequeño -->
        <input
          type="text"
          pInputText
          pSize="small"
          class="
            hidden xs:block w-36 md:w-52
            rounded-2xl! bg-primary-100! border! border-primary-200! border-solid!
            text-surface-800! placeholder:text-surface-400!
          "
          placeholder="Buscar mesa..."
        />

        <!-- Campana -->
        <button
          class="
          w-9 h-9 md:w-10 md:h-10 rounded-full
          border border-solid border-primary-500
          flex items-center justify-center
          text-primary-500
          hover:bg-primary-100
          transition-colors duration-base
        "
        >
          <i class="fa-regular fa-bell text-sm"></i>
        </button>

        <!-- Avatar -->
        <div
          class="
          w-9 h-9 md:w-10 md:h-10 rounded-full
          border border-solid border-primary-500 bg-primary-400
          flex items-center justify-center
          text-surface-0 font-semibold text-sm
        "
        >
          G
        </div>

        <!-- CTA -->
        <p-button
          label="Crear mesa"
          icon="fa-solid fa-plus"
          size="small"
          class="hidden sm:block"
        />
        <!-- versión ícono solo en móvil -->
        <p-button icon="fa-solid fa-plus" size="small" class="sm:hidden" />
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  public readonly _EnvironmentService = inject(EnvironmentService);
}
