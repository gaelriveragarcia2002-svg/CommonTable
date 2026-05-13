import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// CommonTable / Kraft & Tabaco — PrimeNG custom preset
export const CommonTable_kraft = definePreset(Aura, {
  primitive: {
    // info — reemplaza {sky.X} usado por todos los componentes en severity="info"
    sky: {
      50: '#eef3f8',
      100: '#d6e4ef',
      200: '#adc9df',
      300: '#84aecf',
      400: '#6a9ab8',
      500: '#3a5a78',
      600: '#2d4a68',
      700: '#263d58',
      800: '#1a2d40',
      900: '#0e1e2a',
      950: '#071018',
    },
    // success — reemplaza {green.X}
    green: {
      50: '#f0f5ea',
      100: '#d8e9c5',
      200: '#b5d494',
      300: '#92bf63',
      400: '#7a9a55',
      500: '#5d7a3e',
      600: '#4d6a2e',
      700: '#3d5a1e',
      800: '#2a3f14',
      900: '#18250b',
      950: '#0c1305',
    },
    // warn — reemplaza {orange.X}
    orange: {
      50: '#fdf5e6',
      100: '#f8e4b5',
      200: '#f0cc7a',
      300: '#e8b44f',
      400: '#d4a84b',
      500: '#c08a2b',
      600: '#a07020',
      700: '#805815',
      800: '#5a3e0e',
      900: '#352408',
      950: '#1c1304',
    },
    // danger — reemplaza {red.X}
    red: {
      50: '#fbeee9',
      100: '#f2cdc5',
      200: '#e59b8e',
      300: '#d86f60',
      400: '#c4604f',
      500: '#9b3a2b',
      600: '#7e2e22',
      700: '#62231a',
      800: '#451810',
      900: '#280d08',
      950: '#150604',
    },
  },
  semantic: {
    primary: {
      50: '#fbf6e9',
      100: '#f0e3c2',
      200: '#e1c994',
      300: '#cfa765',
      400: '#bd8540',
      500: '#a26825',
      600: '#80501c',
      700: '#5e3a14',
      800: '#3e260b',
      900: '#1f1305',
    },
    surface: {
      0: '#ffffff',
      50: '#fafaf7',
      100: '#ededea',
      200: '#dcdad5',
      300: '#bdbab2',
      400: '#8a8780',
      500: '#605c52',
      600: '#46433b',
      700: '#2c2922',
      800: '#1a1814',
      900: '#0c0b08',
    },
    colorScheme: {
      light: {
        surface: { 0: '#f5efe2', 50: '#ebe2cd' },
        primary: {
          color: '#b87333',
          contrastColor: '#1a1814',
          hoverColor: '#8c4f1d',
          activeColor: '#8c4f1d',
        },
        text: {
          color: '#1a1814', // texto principal — casi negro cálido
          hoverColor: '#0c0b08', // hover más oscuro
          mutedColor: '#605c52', // texto secundario (surface.500)
        },
      },
      dark: {
        surface: { 0: '#1a1612', 50: '#25201a' },
        primary: {
          color: '#e0a05d',
          contrastColor: '#1a1612',
          hoverColor: '#cf8a3f',
          activeColor: '#cf8a3f',
        },
        text: {
          color: '#f5efe2', // texto principal — crema claro
          hoverColor: '#ffffff',
          mutedColor: '#8a8780', // texto secundario (surface.400)
        },
      },
    },
  },
});
