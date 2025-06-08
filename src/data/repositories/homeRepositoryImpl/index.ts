import {HomeRepository} from '../../../domain/repositories/home';
import {homeDataSource} from '../../datasources/homeDataSource';

export class HomeRepositoryImpl implements HomeRepository {
  constructor(private apiDataSource: homeDataSource) {}
}
