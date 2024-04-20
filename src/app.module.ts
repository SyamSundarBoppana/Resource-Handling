import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeModule } from './employee/employee.module';
import { Employee } from './employee/entity/employee.entity';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client/client.module';
import { Client } from './client/entity/client.entity';
import { ProjectModule } from './project/project.module';
import { Project } from './project/entity/project.entity';
import { ResourceModule } from './resource/resource.module';
import { Resource } from './resource/entity/resource.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Employee,Client,Project,Resource],
      synchronize: true,
      logging: true,
    }),
    EmployeeModule,
    ClientModule,
    ProjectModule,
    ResourceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
