import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entity/client.entity';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create.client.dto';
import { UpdateClientDto } from './dto/update.client.dto';
import { Employee } from 'src/employee/entity/employee.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private clientRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto): Promise<Client> {
    const client: Client = new Client();
    client.clientName = createClientDto.clientName;
    client.clientLocation = createClientDto.clientLocation;
    client.onBoardingYear = createClientDto.onBoardingYear;
    return this.clientRepository.save(client);
  }

  findAll(): Promise<Client[]> {
    return this.clientRepository.find({
      relations:{
        projects:true
      }
    });
  }

  async update(id: number, updateClientDto: UpdateClientDto): Promise<Client> {
    const existingClient = await this.clientRepository.findOneBy({ id });
    if (!existingClient) {
      throw new HttpException('Client Not Found', HttpStatus.NOT_FOUND);
    } else {
      const client: Client = new Client();
      client.id = id;
      client.clientName = updateClientDto.clientName;
      client.clientLocation = updateClientDto.clientLocation;
      client.onBoardingYear = updateClientDto.onBoardingYear;
      return this.clientRepository.save(client);
    }
  }

  findByStatus(status:string):Promise<Client[]>{
    return this.clientRepository.findBy({Status:`${status}`});
  }
}
