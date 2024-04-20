import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClientService } from './client.service';
import { Client } from './entity/client.entity';
import { CreateClientDto } from './dto/create.client.dto';
import { UpdateClientDto } from './dto/update.client.dto';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  createClient(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  @Get()
  findAllClients(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Patch(':id')
  updateClient(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientService.update(+id, updateClientDto);
  }
}
