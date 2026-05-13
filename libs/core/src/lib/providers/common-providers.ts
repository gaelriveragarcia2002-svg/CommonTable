import { makeEnvironmentProviders } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import { CommonTable_bluestone } from '../themes';

export function provideCommonTable() {
  return makeEnvironmentProviders([
    providePrimeNG({
      theme: {
        preset: CommonTable_bluestone,
        options: {
          darkModeSelector: 'system',
        },
      },
    }),
  ]);
}
