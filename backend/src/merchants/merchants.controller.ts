import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import {MerchantsService } from './merchants.service';
import {AddMerchant} from '../interfaces/Merchants'


@Controller('merchants')
export class MerchantsController {
  constructor(private readonly appService: MerchantsService) {}

  @Post('/addmerchants')
  addMerchant(@Body() AddMerchant: AddMerchant) {
    return this.appService.addMerchant(AddMerchant.id,AddMerchant.trans, AddMerchant.name)
  }

  @Get()
  findAllMerchants() {
    return this.appService.findAllMer()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOneMer(id)
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
