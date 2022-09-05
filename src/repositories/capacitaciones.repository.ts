import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Capacitaciones, CapacitacionesRelations} from '../models';

export class CapacitacionesRepository extends DefaultCrudRepository<
  Capacitaciones,
  typeof Capacitaciones.prototype.id,
  CapacitacionesRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Capacitaciones, dataSource);
  }
}
