import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Person} from './person.model';

@model()
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  cant_products: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
    required: true,
  })
  observation: string;

  @property({
    type: 'number',
    required: true,
  })
  state: number;

  @belongsTo(() => Person)
  personId: string;

  @property({
    type: 'string',
  })
  productId?: string;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
