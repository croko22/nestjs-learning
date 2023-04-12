import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
//? With a canActivate() method we could manage roles of users.
export class JwtAuthGuard extends AuthGuard('jwt') {}
