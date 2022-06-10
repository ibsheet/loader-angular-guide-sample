import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { DatasModule } from './datas/datas.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [DatasModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'api', method: RequestMethod.GET },
        { path: 'api', method: RequestMethod.POST },
        'api(.*)',
      )
      .forRoutes('api');
  }
}
