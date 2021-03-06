import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { CategoriesModule } from './categories/categories.module';
import { ChallengesModule } from './challenges/challenges.module';
import { PlayersModule } from './players/players.module';

config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_DB_STRING_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ChallengesModule,
    PlayersModule,
    CategoriesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
