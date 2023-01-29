import { Injectable } from '@nestjs/common';
import { FilmsRepository } from '../repositories/films.repository';
import { CreateFilmInputModelType } from '../types/films.types';
import { InjectModel } from '@nestjs/mongoose';
import { Film, FilmDocument } from '../schemas/films.schema';
import { Model } from 'mongoose';

@Injectable()
export class FilmsService {
  constructor(
    protected filmsRepository: FilmsRepository,
    @InjectModel(Film.name) private FilmModel: Model<FilmDocument>,
  ) {}
  async findUsers() {
    return await this.filmsRepository.findFilms();
  }
  async deleteAllFilms(): Promise<boolean> {
    return await this.filmsRepository.deleteAllFilms();
  }
  async addFilm(newFilm: CreateFilmInputModelType): Promise<boolean> {
    const filmModel = new this.FilmModel();
    await filmModel.fillEntity(newFilm);
    await this.filmsRepository.save(filmModel);
    return true;
  }
}
