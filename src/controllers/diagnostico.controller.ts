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
import {Diagnostico} from '../models';
import {DiagnosticoRepository} from '../repositories';

export class DiagnosticoController {
  constructor(
    @repository(DiagnosticoRepository)
    public diagnosticoRepository : DiagnosticoRepository,
  ) {}

  @post('/diagnosticos')
  @response(200, {
    description: 'Diagnostico model instance',
    content: {'application/json': {schema: getModelSchemaRef(Diagnostico)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diagnostico, {
            title: 'NewDiagnostico',
            exclude: ['id'],
          }),
        },
      },
    })
    diagnostico: Omit<Diagnostico, 'id'>,
  ): Promise<Diagnostico> {
    return this.diagnosticoRepository.create(diagnostico);
  }

  @get('/diagnosticos/count')
  @response(200, {
    description: 'Diagnostico model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Diagnostico) where?: Where<Diagnostico>,
  ): Promise<Count> {
    return this.diagnosticoRepository.count(where);
  }

  @get('/diagnosticos')
  @response(200, {
    description: 'Array of Diagnostico model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Diagnostico, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Diagnostico) filter?: Filter<Diagnostico>,
  ): Promise<Diagnostico[]> {
    return this.diagnosticoRepository.find(filter);
  }

  @patch('/diagnosticos')
  @response(200, {
    description: 'Diagnostico PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diagnostico, {partial: true}),
        },
      },
    })
    diagnostico: Diagnostico,
    @param.where(Diagnostico) where?: Where<Diagnostico>,
  ): Promise<Count> {
    return this.diagnosticoRepository.updateAll(diagnostico, where);
  }

  @get('/diagnosticos/{id}')
  @response(200, {
    description: 'Diagnostico model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Diagnostico, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Diagnostico, {exclude: 'where'}) filter?: FilterExcludingWhere<Diagnostico>
  ): Promise<Diagnostico> {
    return this.diagnosticoRepository.findById(id, filter);
  }

  @patch('/diagnosticos/{id}')
  @response(204, {
    description: 'Diagnostico PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Diagnostico, {partial: true}),
        },
      },
    })
    diagnostico: Diagnostico,
  ): Promise<void> {
    await this.diagnosticoRepository.updateById(id, diagnostico);
  }

  @put('/diagnosticos/{id}')
  @response(204, {
    description: 'Diagnostico PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() diagnostico: Diagnostico,
  ): Promise<void> {
    await this.diagnosticoRepository.replaceById(id, diagnostico);
  }

  @del('/diagnosticos/{id}')
  @response(204, {
    description: 'Diagnostico DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.diagnosticoRepository.deleteById(id);
  }
}
