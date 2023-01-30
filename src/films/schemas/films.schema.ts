import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import {
  CreateFilmInputModelType,
  UpdateFilmInputModelType,
} from '../types/films.types';

@Schema()
export class Film {
  @Prop()
  _id: Types.ObjectId;
  @Prop({ required: true, type: String })
  id: string;
  @Prop({ required: true, type: String })
  title: string;
  @Prop({ type: Number })
  year: number;
  @Prop({ type: Number })
  runtime: number;
  @Prop({ type: [String] })
  genres: string[];
  @Prop({ type: String })
  director: string;
  @Prop({ type: [String] })
  actors: string[];
  @Prop({ type: String })
  description: string;
  @Prop({ type: String })
  shortDescription: string;
  @Prop({ type: String })
  posterUrl: string;

  async fillEntity(data: CreateFilmInputModelType): Promise<void> {
    this._id = new Types.ObjectId();
    this.id = new Types.ObjectId().toString();
    this.title = data.title;
    this.year = data.year;
    this.runtime = data.runtime;
    this.genres = data.genres;
    this.director = data.director;
    this.actors = data.actors;
    this.description = data.description;
    this.shortDescription = data.shortDescription;
    this.posterUrl = data.posterUrl;
  }
  async updateEntity(data: UpdateFilmInputModelType): Promise<void> {
    this.title = data.title;
    this.year = data.year;
    this.runtime = data.runtime;
    this.genres = data.genres;
    this.director = data.director;
    this.actors = data.actors;
    this.description = data.description;
    this.shortDescription = data.shortDescription;
    this.posterUrl = data.posterUrl;
  }
}

export type FilmDocument = HydratedDocument<Film>;
export const FilmSchema = SchemaFactory.createForClass(Film);

FilmSchema.methods = {
  fillEntity: Film.prototype.fillEntity,
  updateEntity: Film.prototype.updateEntity,
};
