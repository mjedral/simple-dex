import { useMemo } from 'react';

export const px = (n: number) => `${n / 16}rem`;

export const className = (...args: Array<string | null | undefined>) =>
  args.filter((x) => !!x).join(' ');

export const useClassName = (...args: Array<string | null | undefined>) =>
  useMemo(() => className(...args), args);
