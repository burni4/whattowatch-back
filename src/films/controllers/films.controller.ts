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
    const result = await this.filmsService.findUsers();
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
  deleteFilmById(@Param('id') filmId: string) {
    return filmId;
  }
  @Delete('all')
  async deleteAllFilms() {
    const result: boolean = await this.filmsService.deleteAllFilms();
    return 'All movies have been successfully deleted';
  }
}
