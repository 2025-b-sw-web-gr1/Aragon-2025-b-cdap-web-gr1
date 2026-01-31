import { IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  position: string;

  @IsNumber()
  @IsNotEmpty()
  teamId: number;
}
