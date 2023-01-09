import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Turma } from './turma/entities/turma.entity';
import { TurmaModule } from './turma/turma.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_projetogen',
      entities: [Turma],
      synchronize: true,
    }),
    TurmaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
