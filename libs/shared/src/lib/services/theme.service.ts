import { Injectable } from '@angular/core';
import { usePreset } from '@primeuix/themes';
import { CommonTable_kraft } from '@org/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public v = false;

  public change() {
    usePreset(CommonTable_kraft);
    //usePreset(this.v ? CommonTable_bluestone : CommonTable_kraft);
    this.v = !this.v;
  }
}
