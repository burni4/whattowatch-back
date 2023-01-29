import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Film, FilmSchema } from './films/schemas/films.schema';
import { FilmsController } from './films/controllers/films.controller';
import { FilmsService } from './films/services/films.service';
import { FilmsRepository } from './films/repositories/films.repository';
import { DataBaseController } from './general/controllers/database.controller';

const mongoURILocalhost = 'mongodb://0.0.0.0:27017';
const dbName = 'what-to-watch';
const mongoUri = process.env.mongoURIAtlas || mongoURILocalhost;
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongoURIAtlas || mongoURILocalhost),
    MongooseModule.forFeature([{ name: Film.name, schema: FilmSchema }]),
  ],
  controllers: [AppController, DataBaseController, FilmsController],
  providers: [AppService, FilmsService, FilmsRepository],
})
export class AppModule {}
