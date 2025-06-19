export interface SvgElement {
  id: string;
  tag: 'path' | 'circle' | 'rect' | 'polygon' | string;
  attrs: { 
    [key: string]: string | number,
  };
}
