import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<PostInterface[]> {
    return this.postsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostInterface> {
    return this.postsService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.postsService.delete(id);
  }
}
