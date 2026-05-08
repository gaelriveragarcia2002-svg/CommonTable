import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-my-button',
  imports: [],
  template: `<p>my-button works!</p>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyButton {}
