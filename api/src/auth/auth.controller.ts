import { Body, Controller, Post, HttpCode, HttpStatus, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() {email, password}: loginDto) {
        try {
            if (!email || !password) throw new Error("No email or password passed");
            return this.authService.signIn(email, password);
        } catch (err) {
            throw new BadRequestException("something goes wrong", {description: err.message});
        }
        
    }
}
