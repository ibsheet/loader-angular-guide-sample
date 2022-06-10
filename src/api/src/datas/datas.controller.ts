import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { DatasService } from './datas.service';
import { CreateDataDto } from './dto/create-data.dto';
import { Result } from './interfaces/result.interface';

// sleep 기능
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

@Controller('api')
export class DatasController {
  constructor(private datasService: DatasService) {}

  @Get()
  async findAll(
    @Query('ibpage') ibpage: number,
    @Query('searchMode') searchMode: number,
    @Query('total') total: number,
    @Query('data') data: number,
    @Query('iborderby') iborderby: string,
  ): Promise<Result> {
    console.log(`${ibpage}, ${searchMode}, ${total}, ${data}, ${iborderby}`);
    const result: Result = {
      Total: total || 15000,
      data: this.datasService.findAll(data),
    };

    await sleep(700); // sleep 실행

    return result;
  }

  @Post('/:id')
  async findOne(
    @Param('id') id: string,
    @Body() createDataDto: CreateDataDto,
  ): Promise<Result> {
    console.log(
      `${id}, ${createDataDto.searchMode}, ${createDataDto.total}, ${createDataDto.data}, ${createDataDto.iborderby}`,
    );

    const result: Result = {
      Total: createDataDto.total || 15000,
      data: this.datasService.findAll(createDataDto.data),
    };

    await sleep(700); // sleep 실행

    return result;
  }
}
