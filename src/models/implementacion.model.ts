import {Entity, model, property} from '@loopback/repository';

@model()
export class Implementacion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  costCenter: string;

  @property({
    type: 'string',
    required: true,
  })
  priority: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  requestMeeting: string;


  constructor(data?: Partial<Implementacion>) {
    super(data);
  }
}

export interface ImplementacionRelations {
  // describe navigational properties here
}

export type ImplementacionWithRelations = Implementacion & ImplementacionRelations;
