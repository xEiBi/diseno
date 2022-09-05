import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Capacitaciones} from '../models';
import {CapacitacionesRepository} from '../repositories';

export class CapacitacionesController {
  constructor(
    @repository(CapacitacionesRepository)
    public capacitacionesRepository : CapacitacionesRepository,
  ) {}

  @post('/capacitaciones')
  @response(200, {
    description: 'Capacitaciones model instance',
    content: {'application/json': {schema: getModelSchemaRef(Capacitaciones)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Capacitaciones, {
            title: 'NewCapacitaciones',
            exclude: ['id'],
          }),
        },
      },
    })
    capacitaciones: Omit<Capacitaciones, 'id'>,
  ): Promise<Capacitaciones> {
    return this.capacitacionesRepository.create(capacitaciones);
  }

  @get('/capacitaciones/count')
  @response(200, {
    description: 'Capacitaciones model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Capacitaciones) where?: Where<Capacitaciones>,
  ): Promise<Count> {
    return this.capacitacionesRepository.count(where);
  }

  @get('/capacitaciones')
  @response(200, {
    description: 'Array of Capacitaciones model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Capacitaciones, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Capacitaciones) filter?: Filter<Capacitaciones>,
  ): Promise<Capacitaciones[]> {
    return this.capacitacionesRepository.find(filter);
  }

  @patch('/capacitaciones')
  @response(200, {
    description: 'Capacitaciones PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Capacitaciones, {partial: true}),
        },
      },
    })
    capacitaciones: Capacitaciones,
    @param.where(Capacitaciones) where?: Where<Capacitaciones>,
  ): Promise<Count> {
    return this.capacitacionesRepository.updateAll(capacitaciones, where);
  }

  @get('/capacitaciones/{id}')
  @response(200, {
    description: 'Capacitaciones model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Capacitaciones, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Capacitaciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Capacitaciones>
  ): Promise<Capacitaciones> {
    return this.capacitacionesRepository.findById(id, filter);
  }

  @patch('/capacitaciones/{id}')
  @response(204, {
    description: 'Capacitaciones PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Capacitaciones, {partial: true}),
        },
      },
    })
    capacitaciones: Capacitaciones,
  ): Promise<void> {
    await this.capacitacionesRepository.updateById(id, capacitaciones);
  }

  @put('/capacitaciones/{id}')
  @response(204, {
    description: 'Capacitaciones PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() capacitaciones: Capacitaciones,
  ): Promise<void> {
    await this.capacitacionesRepository.replaceById(id, capacitaciones);
  }

  @del('/capacitaciones/{id}')
  @response(204, {
    description: 'Capacitaciones DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.capacitacionesRepository.deleteById(id);
  }
}
