import { Module } from '@nestjs/common';
import { GitDataUserModule } from './git-data-user/git-data-user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [    
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV.trim()}.env`,
      isGlobal:true
    }),
    GitDataUserModule
  ],
})
export class AppModule {}
