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
import {Diseno} from '../models';
import {DisenoRepository} from '../repositories';

export class DisenoController {
  constructor(
    @repository(DisenoRepository)
    public disenoRepository : DisenoRepository,
  ) {}

  @post('/disenos')
  @response(200, {
    description: 'Diseno model instance',
    content: {'application/json': {schema: getModelSchemaRef(Diseno)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diseno, {
            title: 'NewDiseno',
            exclude: ['id'],
          }),
        },
      },
    })
    diseno: Omit<Diseno, 'id'>,
  ): Promise<Diseno> {
    return this.disenoRepository.create(diseno);
  }

  @get('/disenos/count')
  @response(200, {
    description: 'Diseno model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Diseno) where?: Where<Diseno>,
  ): Promise<Count> {
    return this.disenoRepository.count(where);
  }

  @get('/disenos')
  @response(200, {
    description: 'Array of Diseno model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Diseno, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Diseno) filter?: Filter<Diseno>,
  ): Promise<Diseno[]> {
    return this.disenoRepository.find(filter);
  }

  @patch('/disenos')
  @response(200, {
    description: 'Diseno PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diseno, {partial: true}),
        },
      },
    })
    diseno: Diseno,
    @param.where(Diseno) where?: Where<Diseno>,
  ): Promise<Count> {
    return this.disenoRepository.updateAll(diseno, where);
  }

  @get('/disenos/{id}')
  @response(200, {
    description: 'Diseno model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Diseno, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Diseno, {exclude: 'where'}) filter?: FilterExcludingWhere<Diseno>
  ): Promise<Diseno> {
    return this.disenoRepository.findById(id, filter);
  }

  @patch('/disenos/{id}')
  @response(204, {
    description: 'Diseno PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diseno, {partial: true}),
        },
      },
    })
    diseno: Diseno,
  ): Promise<void> {
    await this.disenoRepository.updateById(id, diseno);
  }

  @put('/disenos/{id}')
  @response(204, {
    description: 'Diseno PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() diseno: Diseno,
  ): Promise<void> {
    await this.disenoRepository.replaceById(id, diseno);
  }

  @del('/disenos/{id}')
  @response(204, {
    description: 'Diseno DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.disenoRepository.deleteById(id);
  }
}
