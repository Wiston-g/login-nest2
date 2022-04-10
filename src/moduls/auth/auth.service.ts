import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';
import { CreateUserDto } from './dto/user-register.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<any> {
    try {
      const user = await this.usersRepository.insert(createUserDto);
      return user;
    } catch (e) {
      const a = 1;
    }
  }
}
