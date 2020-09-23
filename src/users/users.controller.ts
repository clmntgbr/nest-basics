import { Controller, Get, Request, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';
import { UseInterceptors } from '@nestjs/common';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { User } from "./user.entity";

@UseInterceptors(ClassSerializerInterceptor)
@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/user')
    getProfile(@Request() req): Promise<User> {
        return this.usersService.getByEmailAndThrowIfDontExist(req.user.email);
    }

    @Get('/user/:id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.usersService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/users')
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }
}