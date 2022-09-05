import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Implementacion, ImplementacionRelations} from '../models';

export class ImplementacionRepository extends DefaultCrudRepository<
  Implementacion,
  typeof Implementacion.prototype.id,
  ImplementacionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Implementacion, dataSource);
  }
}
