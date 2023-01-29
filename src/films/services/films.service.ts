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
  async findFilms() {
    return await this.filmsRepository.findFilms();
  }
  async findFilmsByID(filmId: string) {
    return await this.filmsRepository.findFilmByID(filmId);
  }

  async deleteFilmByID(filmId: string): Promise<boolean> {
    const foundFilm: FilmDocument = await this.filmsRepository.findFilmByID(
      filmId,
    );
    if (!foundFilm) return false;

    await this.filmsRepository.delete(foundFilm);

    return true;
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
