import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Proyectos, ProyectosRelations} from '../models';

export class ProyectosRepository extends DefaultCrudRepository<
  Proyectos,
  typeof Proyectos.prototype.id,
  ProyectosRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Proyectos, dataSource);
  }
}
