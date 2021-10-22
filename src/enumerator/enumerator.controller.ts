import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { EnumeratorService } from './enumerator.service';
import { CreateEnumeratorDto } from './dto/create-enumerator.dto';
import { UpdateEnumeratorDto } from './dto/update-enumerator.dto';

@Controller('api/enumerator')
export class EnumeratorController {
  constructor(private readonly enumeratorService: EnumeratorService) {}

  @Post('create')
  create(@Body() createEnumeratorDto: CreateEnumeratorDto) {
    return this.enumeratorService.create(createEnumeratorDto);
  }

  @Get()
  findAll() {
    return this.enumeratorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enumeratorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEnumeratorDto: UpdateEnumeratorDto) {
    return this.enumeratorService.update(+id, updateEnumeratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enumeratorService.remove(+id);
  }
}
