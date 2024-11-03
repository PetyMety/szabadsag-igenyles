import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaveRequestsModule } from './leave-requests/leave-requests.module';

@Module({
  imports: [LeaveRequestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
