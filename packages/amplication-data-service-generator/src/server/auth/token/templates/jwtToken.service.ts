/* eslint-disable import/no-unresolved */
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
//@ts-ignore
import { INVALID_PASSWORD_ERROR, INVALID_USERNAME_ERROR } from "../constants";
//@ts-ignore
import { ITokenService } from "../ITokenService";

@Injectable()
export class TokenServiceBase implements ITokenService {
  constructor(protected readonly jwtService: JwtService) {}
  createToken(username: string, password: string): Promise<string> {
    if (!username) return Promise.reject(INVALID_USERNAME_ERROR);
    if (!password) return Promise.reject(INVALID_PASSWORD_ERROR);
    return this.jwtService.signAsync({ username });
  }
}
