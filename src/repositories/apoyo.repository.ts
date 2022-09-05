import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Apoyo, ApoyoRelations} from '../models';

export class ApoyoRepository extends DefaultCrudRepository<
  Apoyo,
  typeof Apoyo.prototype.id,
  ApoyoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Apoyo, dataSource);
  }
}
