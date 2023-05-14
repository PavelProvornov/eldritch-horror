import { Injectable } from '@nestjs/common';
import { IUser } from './types/user.type';

@Injectable()
export class UserService {
    private readonly userList: IUser[] = [
        {
            id: 1,
            name: "User stub 1",
            email: "stub@email.com",
            passwordHash: 'sdfsdfsd'
        }
    ]


    async findUser(email: string): Promise<IUser | undefined> {
        // stub, return primise to emulate db request

        return this.userList.find((user: IUser) => user.email === email);
    }
}
