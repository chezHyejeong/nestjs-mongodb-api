import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostInterface } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private postModel: Model<PostInterface>) {}

  async create(createPostDto: CreatePostDto): Promise<PostInterface> {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  async findAll(): Promise<PostInterface[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<PostInterface> {
    return this.postModel.findById(id).exec();
  }

  async delete(id: string): Promise<any> {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
