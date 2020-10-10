import { Type } from '@angular/core';

export interface Tile {
  name: string;
  component: Type<any> | string;
}
