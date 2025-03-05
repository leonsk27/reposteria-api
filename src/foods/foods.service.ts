import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoodsService {
  constructor(@InjectRepository(Food) private foodsRepository: Repository<Food>) {}
  async create(createFoodDto: CreateFoodDto) {
    const foodData = this.foodsRepository.create(createFoodDto);
    return this.foodsRepository.save(foodData);
  }

  async findAll() {
    const foods = await this.foodsRepository.find();
    if (!foods) throw new HttpException("foods not found", HttpStatus.NOT_FOUND);
    return foods;
  }

  async findOne(uid: string) {
    const foundedFood = await this.foodsRepository.findOneBy({ uid });
    if (!foundedFood) {
      throw new HttpException("Food not found.", HttpStatus.NOT_FOUND);
    };
    return foundedFood;
  }

  async update(uid: string, updateFoodDto: UpdateFoodDto) {
    const existingFood = await this.findOne(uid);
    const mergeData = this.foodsRepository.merge(existingFood, updateFoodDto);
    return this.foodsRepository.save(mergeData);
  }

  async remove(uid: string) {
    const existingFood = await this.findOne(uid);
    return this.foodsRepository.remove(existingFood);
  }
}
