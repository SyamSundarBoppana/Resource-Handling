import { Controller, Get,Post,Body,Patch,Param } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { Resource } from './entity/resource.entity';
import { ApiTags } from '@nestjs/swagger';
import { CreateResourceDto } from './dto/create.resource.dto';
import { UpdateResourceDto } from './dto/update.resource.dto';

@ApiTags('Resource')
@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Post()
  createProject(@Body() createResourceDto: CreateResourceDto): Promise<Resource> {
    return this.resourceService.create(createResourceDto);
  }

  @Get()
  findAllResources(): Promise<Resource[]> {
    return this.resourceService.findAll();
  }

  @Patch(':id')
  updateProject(@Param('id') id:string, @Body() updateResourceDto:UpdateResourceDto){
    return this.resourceService.update(+id, updateResourceDto)
  }
}
