import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Diseno, DisenoRelations} from '../models';

export class DisenoRepository extends DefaultCrudRepository<
  Diseno,
  typeof Diseno.prototype.id,
  DisenoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Diseno, dataSource);
  }
}
