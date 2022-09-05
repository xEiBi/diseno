import {Entity, model, property} from '@loopback/repository';

@model()
export class Form extends Entity {
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
  email: string;

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
  documentType: string;

  @property({
    type: 'string',
    required: true,
  })
  process: string;

  @property({
    type: 'string',
    required: true,
  })
  subprocess: string;

  @property({
    type: 'string',
    required: true,
  })
  documentName: string;

  @property({
    type: 'string',
    required: true,
  })
  requestDetails: string;

  @property({
    type: 'string',
    required: true,
  })
  file: string;

  @property({
    type: 'string',
    required: true,
  })
  requestMeeting: string;

  constructor(data?: Partial<Form>) {
    super(data);
  }
}

export interface FormRelations {
  // describe navigational properties here
}

export type FormWithRelations = Form & FormRelations;
