import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(CreateUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(CreateUserDto.password, 10);
    const createdUser = new this.userModel({
      ...CreateUserDto,
      password: hashedPassword,
    });
    return createdUser.save();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    let updateObject = updateUserDto;
    if (updateUserDto.password) {
      const hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
      updateObject = { ...updateUserDto, password: hashedPassword };
    }
    return this.userModel
      .findByIdAndUpdate(id, updateObject, { new: true })
      .exec();
  }

  async delete(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
