import { Compra } from './compra';
import { Venta } from './venta';

export interface CambioDolar {
  venta: Venta;
  compra: Compra;
}
