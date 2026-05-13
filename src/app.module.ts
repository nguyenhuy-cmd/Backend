import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'your_password',
      database: 'your_db_name',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Tự động tạo bảng (chỉ nên dùng khi dev)
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
