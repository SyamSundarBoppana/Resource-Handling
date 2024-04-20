import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Resource } from './entity/resource.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateResourceDto } from './dto/create.resource.dto';
import { UpdateResourceDto } from './dto/update.resource.dto';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
  ) {}

  create(createResourceDto: CreateResourceDto): Promise<Resource> {
    const resource: Resource = new Resource();
    resource.mainResourceName = createResourceDto.mainResourceName;
    resource.mainResourceId = createResourceDto.mainResourceID;
    resource.shadowResourceName = createResourceDto.shadowResourceName;
    resource.shadowResourceId = createResourceDto.shadowResourceID;
    resource.skills = createResourceDto.skills;
    resource.billingAmount = createResourceDto.billingAmount;
    resource.projectId = createResourceDto.projectId;
    return this.resourceRepository.save(resource);
  }

  findAll(): Promise<Resource[]> {
    return this.resourceRepository.find();
  }

  async update(
    id: number,
    updateResourceDto: UpdateResourceDto,
  ): Promise<Resource> {
    const existingResource = await this.resourceRepository.findOneBy({ id });
    if (!existingResource) {
      throw new HttpException('Resource Not Found', HttpStatus.NOT_FOUND);
    } else {
      const resource: Resource = new Resource();
      resource.id = id;
      resource.mainResourceName = updateResourceDto.mainResourceName;
      resource.mainResourceId = updateResourceDto.mainResourceID;
      resource.shadowResourceName = updateResourceDto.shadowResourceName;
      resource.shadowResourceId = updateResourceDto.shadowResourceID;
      resource.skills = updateResourceDto.skills;
      resource.billingAmount = updateResourceDto.billingAmount;
      return this.resourceRepository.save(resource);
    }
  }
}
