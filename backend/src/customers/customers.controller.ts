import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import {CustomerService } from './customers.service';
import {Customers,CusDelete,CusUpdate} from '../interfaces/Customers'


@Controller('customers')
export class CustomerController {
  constructor(private readonly appService: CustomerService) {}

  @Get()
  findAllCustomers() {
    return this.appService.findAllCus()
  }

  @Get(':id')
  findOneCus(@Param('id') id: string) {
    return this.appService.findOneCus(id)
  }

  @Put('/update')
  UpdateCus(@Body() CusUpdate: CusUpdate) {
    return this.appService.UpdateCus(CusUpdate.name , CusUpdate.id)
  }

  @Delete('/delete')
  DeleteCus(@Body() CusDelete: CusDelete) {
    return this.appService.DeleteCus(CusDelete.id)
  }
}
