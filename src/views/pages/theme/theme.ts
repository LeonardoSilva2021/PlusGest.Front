import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { ThemeType } from 'primeng/config';

export const theme: ThemeType = {
  preset: definePreset(Aura, {
    semantic: {
      //   primary: {
      //     50: '{yellow.50}',
      //     100: '{yellow.100}',
      //     200: '{yellow.200}',
      //     300: '{yellow.300}',
      //     400: '{yellow.400}',
      //     500: '{yellow.500}',
      //     600: '{yellow.600}',
      //     700: '{yellow.700}',
      //     800: '{yellow.800}',
      //     900: '{yellow.900}',
      //     950: '{yellow.950}',
      //   },
      colorScheme: {
        light: {
          primary: {
            color: '#e0b219',
            inverseColor: '#FFF',
            hoverColor: '#e0b219',
            activeColor: '#e0b219',
          },
          highlight: {
            background: '#e0b219',
            focusBackground: '#e0b219',
            color: '#ffffff',
            focusColor: '#ffffff',
          },
        },
      },
    },
  }),
  options: {
    darkModeSelector: false || 'none',
  },
};
