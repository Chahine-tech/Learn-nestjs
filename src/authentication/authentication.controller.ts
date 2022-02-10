import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CredentialsDto } from './dto/credentials.dto';


@Controller('authentication')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) { }

  @Post("login")
  Login(@Body() createAuthenticationDto: CredentialsDto) {
    return this.authenticationService.login(createAuthenticationDto);
  }
  @Post("register")
  Register(@Body() createAuthenticationDto: CredentialsDto) {
    return this.authenticationService.create(createAuthenticationDto);
  }
}
