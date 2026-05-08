import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestComponent } from '@org/shared';

@Component({
  imports: [RouterModule, TestComponent],
  selector: 'app-root',
  template: `
    <div>
      <p>Hola Mundo</p>
      <lib-test></lib-test>
    </div>
  `,
})
export class App {
  protected title = 'desktop-app';
}
