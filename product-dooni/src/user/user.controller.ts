import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly productService: UserService) {}

  @Get('/update-user')
  updateUser() {
    return 'user updated successfully';
  }
}