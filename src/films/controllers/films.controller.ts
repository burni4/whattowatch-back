import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FilmsService } from '../services/films.service';
import { CreateFilmInputModelType } from '../types/films.types';

@Controller('films')
export class FilmsController {
  constructor(protected filmsService: FilmsService) {}
  @Get()
  async getFilms() {
    const result = await this.filmsService.findFilms();
    return result;
  }
  @Get(':id')
  async getFilmsByID(@Param('id') filmId: string) {
    const result = await this.filmsService.findFilmsByID(filmId);
    if (!result) return 'Film not found';
    return result;
  }
  @Post()
  async addFilm(@Body() inputModel: CreateFilmInputModelType) {
    const result = await this.filmsService.addFilm(inputModel);
    return inputModel;
  }
  @Put(':id')
  updateFilmById(@Param('id') filmId: string) {
    return filmId;
  }
  @Delete(':id')
  async deleteFilmById(@Param('id') filmId: string) {
    const result = await this.filmsService.deleteFilmByID(filmId);
    if (!result) return 'Film not deleted';
    return 'The film has been successfully deleted';
  }
}
