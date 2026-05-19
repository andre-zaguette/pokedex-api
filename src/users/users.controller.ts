import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/jwt-auth.guard';
import { CurrentUser } from '../common/current-user.decorator';
import { JwtUser } from '../auth/jwt.strategy';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getProfile(@CurrentUser() user: JwtUser) {
    return this.usersService.findById(user.sub);
  }

  @Patch('me')
  async updateProfile(@CurrentUser() user: JwtUser, @Body() body: { name?: string }) {
    return this.usersService.update(user.sub, body);
  }

  @Get('search')
  async searchUsers(@CurrentUser() user: JwtUser, @Query('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Post('friends/:friendId')
  async addFriend(@CurrentUser() user: JwtUser, @Param('friendId') friendId: string) {
    return this.usersService.addFriend(user.sub, friendId);
  }

  @Get('friends')
  async getFriends(@CurrentUser() user: JwtUser) {
    return this.usersService.getFriends(user.sub);
  }

  @Delete('friends/:friendId')
  async removeFriend(@CurrentUser() user: JwtUser, @Param('friendId') friendId: string) {
    return this.usersService.removeFriend(user.sub, friendId);
  }

  @Get('friends/pending')
  async getPendingRequests(@CurrentUser() user: JwtUser) {
    return this.usersService.getPendingRequests(user.sub);
  }

  @Post('friends/:friendId/accept')
  async acceptFriend(@CurrentUser() user: JwtUser, @Param('friendId') friendId: string) {
    return this.usersService.acceptFriend(user.sub, friendId);
  }
}
