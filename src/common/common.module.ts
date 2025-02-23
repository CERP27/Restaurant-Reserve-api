import { TypeOrmModule } from '@nestjs/typeorm';
import { BaseEntity } from './infrastructure/persistence/entities/base.entity';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([BaseEntity])],
  providers: [],
  exports: [],
})
export class CommonModule {}
