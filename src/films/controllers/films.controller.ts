import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FilmsService } from '../services/films.service';
import { CreateFilmInputModelType } from '../types/films.types';

@Controller('films')
export class FilmsController {
  constructor(protected filmsService: FilmsService) {}
  @Get()
  async getFilms() {
    const result = await this.filmsService.findUsers();
    return 'All films';
  }
  @Post()
  addFilm(@Body() inputModel: CreateFilmInputModelType) {
    return inputModel;
  }
  @Delete(':id')
  deleteFilmById(@Param('id') filmId: string) {
    return filmId;
  }
  @Delete('/all')
  async deleteAllFilms() {
    const result: boolean = await this.filmsService.deleteAllFilms();
  }
}
