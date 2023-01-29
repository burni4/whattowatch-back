import { Controller, Delete, Param } from '@nestjs/common';
import { FilmsService } from '../../films/services/films.service';

@Controller('database')
export class DataBaseController {
  constructor(protected filmsService: FilmsService) {}

  @Delete('clearTable/:tableName')
  async clearTable(@Param('tableName') tableName: string) {
    if (tableName === 'films') {
      const result: boolean = await this.filmsService.deleteAllFilms();
      return 'The film table has been successfully cleared';
    }
    return 'Table not found';
  }
}
