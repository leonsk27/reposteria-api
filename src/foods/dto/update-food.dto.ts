import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';

export class UpdateFoodDto extends PartialType(CreateFoodDto) {
    uid?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    active?: boolean | undefined;
}
