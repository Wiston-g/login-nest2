import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/user-register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  create(@Res() res, @Body() createUserDto: CreateUserDto) {
    const user = this.authService.create(createUserDto);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      user: user,
    });
  }
}
