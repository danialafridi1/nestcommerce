import { IsBoolean, IsEnum, IsOptional } from "class-validator";
import { Transform, Type } from "class-transformer";
import { UserRole } from "./create-user.dto";

export class GetUserParamDTO {
    @IsOptional()
    @IsEnum(UserRole)
    role: UserRole;
}
