import { Global, Module } from '@nestjs/common';
import { DatasController } from './datas.controller';
import { DatasService } from './datas.service';

@Global()
@Module({
  controllers: [DatasController],
  providers: [DatasService],
  exports: [DatasService],
})
export class DatasModule {}
