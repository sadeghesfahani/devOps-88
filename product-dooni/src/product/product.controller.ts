import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/update-product')
  updateProduct() {
    return 'product updated successfully';
  }

  @Get('/delete-product')
  deleteProduct() {
    return 'product deleted successfully';
  }
}
