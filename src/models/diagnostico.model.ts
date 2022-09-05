import {Entity, model, property} from '@loopback/repository';

@model()
export class Diagnostico extends Entity {
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
  area: string;

  @property({
    type: 'string',
    required: true,
  })
  position: string;

  @property({
    type: 'string',
    required: true,
  })
  subsidiary: string;

  @property({
    type: 'string',
    required: true,
  })
  priority: string;

  @property({
    type: 'string',
    required: true,
  })
  requestType: string;

  @property({
    type: 'string',
    required: true,
  })
  process: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  objective: string;


  constructor(data?: Partial<Diagnostico>) {
    super(data);
  }
}

export interface DiagnosticoRelations {
  // describe navigational properties here
}

export type DiagnosticoWithRelations = Diagnostico & DiagnosticoRelations;
