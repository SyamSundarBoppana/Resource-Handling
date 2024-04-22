import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
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

  @ApiParam({
    name: 'status',
    required: true,
  })
  @Get('/status:status')
  findClientsByStatus(@Param('status') status: string) {
    return this.clientService.findByStatus(status);
  }

  @Patch('status/:id')
  updateClient(
    @Param('id') id: string,
    @Body() updateClientDto: UpdateClientDto,
  ) {
    return this.clientService.update(+id, updateClientDto);
  }

  @Patch(':id')
  updateClientStatus(@Param('id') id: string) {
    return this.clientService.updateStatusById(+id);
  }
}
