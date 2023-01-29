import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

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
}
export type FilmDocument = HydratedDocument<Film>;
export const FilmSchema = SchemaFactory.createForClass(Film);
