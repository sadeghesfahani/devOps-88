import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get('/update-product')
  updateProduct() {
    return 'product updated successfully';
  }
  @Get('/create-product')
  createProduct() {
    return 'product created successfully';
  }
}
