import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Film, FilmDocument } from '../schemas/films.schema';

@Injectable()
export class FilmsRepository {
  constructor(@InjectModel(Film.name) private FilmModel: Model<FilmDocument>) {}
  async save(film: FilmDocument): Promise<boolean> {
    await film.save();
    return true;
  }
  async delete(film: FilmDocument): Promise<boolean> {
    await film.deleteOne();
    return true;
  }
  async findFilms(): Promise<FilmDocument[]> {
    return await this.FilmModel.find({}).exec();
  }
  async findFilmByID(filmId: string): Promise<FilmDocument> {
    return await this.FilmModel.findOne({ id: filmId }).exec();
  }
  async deleteAllFilms(): Promise<boolean> {
    await this.FilmModel.deleteMany({});
    return true;
  }
}
