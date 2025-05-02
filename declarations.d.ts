declare module 'tailwind-rn' {
  import { TailwindFn } from 'nativewind';
  const tailwind: TailwindFn;
  export default tailwind;
}

declare module '*.svg' {
  import * as React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
