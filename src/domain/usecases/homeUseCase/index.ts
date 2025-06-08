import {homeDataSource} from '../../../data/datasources/homeDataSource';
import {HomeRepositoryImpl} from '../../../data/repositories/homeRepositoryImpl';
import {HomeRepository} from '../../repositories/home';
export class HomeUseCase {
  constructor(private homeRepository: HomeRepository) {}
}

export const HomeUseCases = new HomeUseCase(
  new HomeRepositoryImpl(new homeDataSource()),
);
