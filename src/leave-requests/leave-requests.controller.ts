import { Get, Controller, Post, Body, ValidationPipe, Render } from '@nestjs/common';
import { LeavesService } from './leave-requests.service';
import { CreateLeaveRequestDto } from './dto/create-leave-request.dto';

@Controller('leaves')
export class LeavesController {
    constructor(private readonly leavesService: LeavesService) {}

    @Get('request')
    @Render('leave-request')
    getLeaveRequestForm() {
        return { leaveData: {}, error: null };
    }

    @Post('request')
    async submitLeaveRequest(@Body(ValidationPipe) leaveData: CreateLeaveRequestDto) {
        const { name, startDate, endDate, isPaidLeave, employeeId, justification } = leaveData;

        // Validate start date and end date
        if (new Date(startDate) >= new Date(endDate)) {
            return { error: 'Start date must be before end date.', leaveData };
        }

        await this.leavesService.writeLeaveRequestToCsv(leaveData);
        return { success: 'Leave request submitted successfully!', leaveData: null };
    }
}
