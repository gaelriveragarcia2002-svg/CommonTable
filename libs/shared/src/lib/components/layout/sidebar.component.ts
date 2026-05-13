import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'lib-sidebar',
  template: ` <aside
    id="sidebar-container"
    class="flex items-center flex-col gap-4 justify-center rounded-xl mt-1"
  >
    <div id="sidebar-start" class="w-full flex flex-col gap-4">
      <div
        class="w-full flex rounded-xl items-center justify-start gap-2 dark:bg-primary-800 border-primary-900 border border-solid xl:px-4 xl:py-2"
      >
        <i
          class="rounded-lg bg-primary-800 text-primary-100 flex items-center justify-center max-xl:min-w-full h-10 xl:h-10 xl:w-10"
        >
          <p>C</p>
        </i>
        <p
          class="overflow-hidden whitespace-nowrap max-w-0 opacity-0 xl:max-w-fit xl:opacity-100 transition-[max-width,opacity] duration-300 ease-in-out"
        >
          Common<span class="text-primary-500 font-bold">table</span>
        </p>
      </div>
      <hr class="border-dashed border-[1.5px] border-primary-400" />
    </div>
    <div id="sidebar-content" class="w-full flex flex-col gap-2">
      <p
        i18n
        class="w-full justify-start items-center font-serif text-xs hidden xl:block"
      >
        Jugar
      </p>
      @for (v of MAIN_ROUTES; track $index) {
        <div
          [pTooltip]="v.title"
          class="bg-primary-900 min-h-10 min-w-10 flex items-center justify-center xl:justify-start text-primary-100 hover:bg-primary-800 hover:cursor-pointer transition-all duration-200 ease-in-out px-4 py-1 rounded-lg"
        >
          <p class="flex gap-2 items-center justify-center xl:justify-start">
            <i [ngClass]="v.icon"></i>
            <span class="hidden xl:block">{{ v.title }}</span>
          </p>
        </div>
      }
    </div>
    <div id="sidebar-end"></div>
  </aside>`,
  imports: [CommonModule, TooltipModule],
})
export class SideBarComponent {
  //   public readonly _EnvironmentService = inject(EnvironmentService);

  // * Consntantes del componente.
  public MAIN_ROUTES = [
    {
      title: 'Inicio',
      route: 'start',
      icon: 'fa-solid fa-house',
    },
    {
      title: 'Inicio',
      route: 'start',
      icon: 'fa-solid fa-house',
    },
  ];
}
