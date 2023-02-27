import { PartialType } from '@nestjs/swagger';
import { Roles } from '../roles/roles.enum';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    role?: Roles;
}
