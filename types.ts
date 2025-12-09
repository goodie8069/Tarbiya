export enum SlideType {
  TITLE = 'TITLE',
  AGENDA = 'AGENDA',
  CONTENT_LEFT = 'CONTENT_LEFT',
  CONTENT_RIGHT = 'CONTENT_RIGHT',
  LIST = 'LIST',
  COMPARISON = 'COMPARISON',
  CENTERED = 'CENTERED',
  FINAL = 'FINAL'
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  quote?: string; // Added for philosophical quotes
  content: string[];
  highlight?: string; 
  image?: string;
}