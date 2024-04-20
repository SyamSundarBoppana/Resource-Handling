import { Controller, Get, Post,Body, Patch,Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './entity/project.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateProjectDto } from './dto/create.project.dto';
import { UpdateProjectDto } from './dto/update.project.dto';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  createProject(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<Project> {
    return this.projectService.create(createProjectDto)
  }

  @Get()
  findAllProjects(): Promise<Project[]> {
    return this.projectService.findAll();
  }

  @Patch(':id')
  updateProject(@Param('id') id:string, @Body() updateProjectDto:UpdateProjectDto){
    return this.projectService.update(+id, updateProjectDto)
  }
}
