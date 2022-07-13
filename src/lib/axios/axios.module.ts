import { ExceptionsModule } from 'src/config/exception/exception.module';
import { AxiosService } from './axios.service';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [ConfigModule, ExceptionsModule],
  providers: [AxiosService],
  exports: [AxiosService],
})
export class AxiosModule {}