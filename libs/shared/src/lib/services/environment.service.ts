import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

export type AppEnvironment = 'web' | 'desktop' | 'ios' | 'android';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentService {
  private readonly _platformId = inject(PLATFORM_ID);
  private readonly _env: AppEnvironment = this.detect();

  private detect(): AppEnvironment {
    if (!isPlatformBrowser(this._platformId)) return 'web';
    if ('__TAURI_INTERNALS__' in window) return 'desktop';
    //const cap = Capacitor.getPlatform();
    //if (cap === 'ios' || cap === 'android') return cap;
    return 'web';
  }

  get environment(): AppEnvironment {
    return this._env;
  }

  get isWeb(): boolean {
    return this._env === 'web';
  }

  get isDesktop(): boolean {
    return this._env === 'desktop';
  }

  get isMobile(): boolean {
    return this._env === 'ios' || this._env === 'android';
  }

  get isIOS(): boolean {
    return this._env === 'ios';
  }

  get isAndroid(): boolean {
    return this._env === 'android';
  }
}
