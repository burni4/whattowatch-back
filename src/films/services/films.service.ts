import { Injectable } from '@nestjs/common';
import { FilmsRepository } from '../repositories/films.repository';

@Injectable()
export class FilmsService {
  constructor(protected filmsRepository: FilmsRepository) {}
  async findUsers() {
    return await this.filmsRepository.findFilms();
  }
  async deleteAllFilms(): Promise<boolean> {
    return await this.filmsRepository.deleteAllFilms();
  }
}
