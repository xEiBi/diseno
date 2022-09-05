import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Diagnostico, DiagnosticoRelations} from '../models';

export class DiagnosticoRepository extends DefaultCrudRepository<
  Diagnostico,
  typeof Diagnostico.prototype.id,
  DiagnosticoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Diagnostico, dataSource);
  }
}
