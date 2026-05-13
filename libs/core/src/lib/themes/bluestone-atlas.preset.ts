import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// CommonTable / Kraft & Tabaco — PrimeNG custom preset
export const CommonTable_bluestone = definePreset(Aura, {
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
      50: '#eff3f7',
      100: '#cad7e3',
      200: '#9bb5cb',
      300: '#6b8eaf',
      400: '#476f93',
      500: '#3a5a78',
      600: '#2c455d',
      700: '#1f3144',
      800: '#13202d',
      900: '#091017',
      950: '#000000', // agrega 950 si no lo tienes
    },
    surface: {
      0: '#ffffff',
      50: '#f8f6f0',
      100: '#e9e6dd',
      200: '#d2cec1',
      300: '#aaa595',
      400: '#7a766a',
      500: '#525049',
      600: '#383631',
      700: '#1f1e1b',
      800: '#121110',
      900: '#080807',
    },
    colorScheme: {
      light: {
        surface: { 50: '#e8e3d4' },
        primary: {
          color: '#3a5a78',
          contrastColor: '#f5f1e8', // crema claro — legible sobre el azul oscuro
          hoverColor: '#2c4760', // un paso más oscuro que el base
          activeColor: '#1e3349', // más oscuro aún, diferencia clara del hover
        },
        success: '#4a6b2e', // un poco más saturado, más legible
        warn: '#9e6b18', // bajé el tono para mejor contraste sobre claro
        danger: '#8a2e20', // ligeramente más oscuro
        info: '#345f82', // más oscuro que el primary para distinguirse
      },
      dark: {
        surface: { 50: '#1c2229' },
        primary: {
          color: '#7ea3c4',
          contrastColor: '#11161c',
          hoverColor: '#6b8eaf',
          activeColor: '#6b8eaf',
        },
        success: '#8aa365',
        warn: '#dca857',
        danger: '#c66a5d',
        info: '#7ea3c4',
      },
    },
  },
});
