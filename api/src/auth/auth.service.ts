import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService) {}

    async signIn(email: string, password: string): Promise<any> {
        try {
            const user = await this.usersService.findUser(email);

            // TODO integrate bcript later
            const hashedPassword = password;

            if (!user || user.passwordHash !== hashedPassword) {
                throw new UnauthorizedException("Wrong password or user is not exist");
            }
            const { passwordHash, ...userBody } = user;
            // TODO: Generate a JWT and return it here
            // instead of the user object
            return userBody;
        } catch (err) {
            throw new BadRequestException();
        }
    }
}
