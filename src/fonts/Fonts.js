import { Global } from '@emotion/react';

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Bitter';
        font-style: normal;
        src: url(./Bitter/Bitter-Regular.ttf) format('ttf');
      }
      `}
  />
);
