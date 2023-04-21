import { hash } from 'bcrypt';
import { User } from '@/interfaces/users.interface';
import { Repository } from 'typeorm';
import { UserEntity } from '@/entities/users.entity';
import { HttpException } from '@/exceptions/httpException';

export class AuthService extends Repository<UserEntity> {
    public async signup(userData: User): Promise<User> {
        const findUser: User = await UserEntity.findOne({ where: { email: userData.email } });
        if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

        const hashedPassword = await hash(userData.password, 10);
        const createdUserData: User = await UserEntity.create({ ...userData, password: hashedPassword }).save();
        return createdUserData;
    }
}
