import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserManagementModule } from './modules/user_management/user_management.module';
import { BookManagementModule } from './modules/book_management/book_management.module';
import { AuthorManagementModule } from './modules/author_management/author_management.module';
import { ReviewManagementModule } from './modules/review_managemnt/review_management.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production
      logging: true,
    }),
    UserManagementModule,
    BookManagementModule,
    AuthorManagementModule,
    ReviewManagementModule,
  ],
})
export class AppModule {}
