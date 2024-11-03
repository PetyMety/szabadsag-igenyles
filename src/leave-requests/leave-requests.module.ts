import { Module } from '@nestjs/common';
import { LeavesService  } from './leave-requests.service';
import { LeavesController  } from './leave-requests.controller';

@Module({
  controllers: [LeavesController ],
  providers: [LeavesService ],
})
export class LeaveRequestsModule {}
