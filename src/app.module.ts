import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FavoriteModule } from './favorite/favorite.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: "mongodb+srv://aurabilanox:jbzbZxwKG280cBEY@cluster0.hhcri.mongodb.net/pharmacy",
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    FavoriteModule,
    PharmacyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
