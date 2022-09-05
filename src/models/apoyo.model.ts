import {Entity, model, property} from '@loopback/repository';

@model()
export class Apoyo extends Entity {
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
  project: string;

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
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  requestMeeting: string;

  constructor(data?: Partial<Apoyo>) {
    super(data);
  }
}

export interface ApoyoRelations {
  // describe navigational properties here
}

export type ApoyoWithRelations = Apoyo & ApoyoRelations;
