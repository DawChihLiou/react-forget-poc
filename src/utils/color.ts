import pSBC from 'shade-blend-color';

export function dim(scale: number, color: string): string {
  return pSBC(scale, color);
}
