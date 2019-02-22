import { Controller, Req } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('login')
    userLogin() {
        this.userService.checkHealth('User Module');
        return this.userService.userLogin();
    }
}
