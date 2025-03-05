import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  create(@Body() createFoodDto: CreateFoodDto) {
    return this.foodsService.create(createFoodDto);
  }

  @Get()
  findAll() {
    return this.foodsService.findAll();
  }

  @Get(':uid')
  findOne(@Param('uid') uid: string) {
    return this.foodsService.findOne(uid);
  }

  @Patch(':uid')
  update(@Param('uid') uid: string, @Body() updateFoodDto: UpdateFoodDto) {
    return this.foodsService.update(uid, updateFoodDto);
  }

  @Delete(':uid')
  remove(@Param('uid') uid: string) {
    return this.foodsService.remove(uid);
  }
}
