export interface todo {
  id: number;
  order: number;
  text: string;
}

export interface boards {
  id: number;
  title: string;
  items: { id: number; title: string }[];
}

export interface boardItem {
  id: number;
  title: string;
}
