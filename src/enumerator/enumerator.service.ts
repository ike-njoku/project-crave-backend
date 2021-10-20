import { Body, Injectable, Post } from '@nestjs/common';
import { CreateEnumeratorDto } from './dto/create-enumerator.dto';
import { UpdateEnumeratorDto } from './dto/update-enumerator.dto';

@Injectable()
export class EnumeratorService {
  create(createEnumeratorDto: CreateEnumeratorDto) {
    return 'This action adds a new enumerator';
  }

  findAll() {
    return `This action returns all enumerator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} enumerator`;
  }

  update(id: number, updateEnumeratorDto: UpdateEnumeratorDto) {
    return `This action updates a #${id} enumerator`;
  }

  remove(id: number) {
    return `This action removes a #${id} enumerator`;
  }
}
