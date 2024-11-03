import { Injectable } from '@nestjs/common';
import { CreateLeaveRequestDto } from './dto/create-leave-request.dto';
import * as csv from 'csv-writer';
import { join } from 'path';

@Injectable()
export class LeavesService {
    async writeLeaveRequestToCsv(leaveData: CreateLeaveRequestDto) {
        const csvWriter = csv.createObjectCsvWriter({
            path: join(__dirname, '..', '..', 'public', 'leave-requests.csv'),
            header: [
                { id: 'name', title: 'Name' },
                { id: 'startDate', title: 'Start Date' },
                { id: 'endDate', title: 'End Date' },
                { id: 'isPaidLeave', title: 'Paid Leave' },
                { id: 'employeeId', title: 'Employee ID' },
                { id: 'justification', title: 'Justification' },
            ],
        });

        await csvWriter.writeRecords([leaveData]);
    }
}