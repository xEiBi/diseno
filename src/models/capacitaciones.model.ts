import {Entity, model, property} from '@loopback/repository';

@model()
export class Capacitaciones extends Entity {
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
  priority: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  position: string;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  requestMeeting: string;

  constructor(data?: Partial<Capacitaciones>) {
    super(data);
  }
}

export interface CapacitacionesRelations {
  // describe navigational properties here
}

export type CapacitacionesWithRelations = Capacitaciones &
  CapacitacionesRelations;
