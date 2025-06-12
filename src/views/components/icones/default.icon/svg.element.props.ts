export interface SvgElement {
  tag: 'path' | 'circle' | 'rect' | 'polygon' | string;
  attrs: { 
    [key: string]: string | number,
  };
}
