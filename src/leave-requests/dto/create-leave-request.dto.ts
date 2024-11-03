import { IsNotEmpty, IsString, IsDateString, IsOptional, Matches, MinLength } from 'class-validator';

export class CreateLeaveRequestDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsDateString()
    startDate: string;

    @IsNotEmpty()
    @IsDateString()
    endDate: string;

    @IsOptional()
    isPaidLeave: boolean;

    @IsNotEmpty()
    @Matches(/^[A-Z]{3}-[1-9]{3}$/, { message: 'Employee ID must be in the format BBB-SSS' })
    employeeId: string;

    @IsNotEmpty()
    @MinLength(30)
    justification: string;
}
