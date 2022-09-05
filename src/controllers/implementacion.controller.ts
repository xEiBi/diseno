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
import {Implementacion} from '../models';
import {ImplementacionRepository} from '../repositories';

export class ImplementacionController {
  constructor(
    @repository(ImplementacionRepository)
    public implementacionRepository : ImplementacionRepository,
  ) {}

  @post('/implementacions')
  @response(200, {
    description: 'Implementacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Implementacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Implementacion, {
            title: 'NewImplementacion',
            exclude: ['id'],
          }),
        },
      },
    })
    implementacion: Omit<Implementacion, 'id'>,
  ): Promise<Implementacion> {
    return this.implementacionRepository.create(implementacion);
  }

  @get('/implementacions/count')
  @response(200, {
    description: 'Implementacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Implementacion) where?: Where<Implementacion>,
  ): Promise<Count> {
    return this.implementacionRepository.count(where);
  }

  @get('/implementacions')
  @response(200, {
    description: 'Array of Implementacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Implementacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Implementacion) filter?: Filter<Implementacion>,
  ): Promise<Implementacion[]> {
    return this.implementacionRepository.find(filter);
  }

  @patch('/implementacions')
  @response(200, {
    description: 'Implementacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Implementacion, {partial: true}),
        },
      },
    })
    implementacion: Implementacion,
    @param.where(Implementacion) where?: Where<Implementacion>,
  ): Promise<Count> {
    return this.implementacionRepository.updateAll(implementacion, where);
  }

  @get('/implementacions/{id}')
  @response(200, {
    description: 'Implementacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Implementacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Implementacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Implementacion>
  ): Promise<Implementacion> {
    return this.implementacionRepository.findById(id, filter);
  }

  @patch('/implementacions/{id}')
  @response(204, {
    description: 'Implementacion PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Implementacion, {partial: true}),
        },
      },
    })
    implementacion: Implementacion,
  ): Promise<void> {
    await this.implementacionRepository.updateById(id, implementacion);
  }

  @put('/implementacions/{id}')
  @response(204, {
    description: 'Implementacion PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() implementacion: Implementacion,
  ): Promise<void> {
    await this.implementacionRepository.replaceById(id, implementacion);
  }

  @del('/implementacions/{id}')
  @response(204, {
    description: 'Implementacion DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.implementacionRepository.deleteById(id);
  }
}
