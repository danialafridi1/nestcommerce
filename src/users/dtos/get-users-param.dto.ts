import { IsBoolean, IsOptional } from "class-validator";
import { Transform, Type } from "class-transformer";

export class GetUserParamDTO {
    @IsBoolean()
    @IsOptional()
    @Transform(({ value }) => value === 'true' ? true : value === 'false' ? false : undefined)
    isMarried: boolean;
}
