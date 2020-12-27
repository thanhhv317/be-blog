import { Controller, Get, HttpStatus, NotFoundException, Param, Req, Res } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
    constructor( private readonly  _categoryService: CategoriesService ) { }

    @Get('')
    async getList(@Res() res) {
        try {
            const categories = await this._categoryService.categories();
            return res.status(HttpStatus.OK).json({
                success: true,
                data: categories
            })
        }
        catch (e) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'error/500'
            })
        }
    }

    @Get('/:id')
    async getCategoryById(@Param('id') id: string, @Res() res ) {
        try {
            const category = await this._categoryService.category(id);
            if(!category) throw new NotFoundException('Category does not exist!');
            return res.status(HttpStatus.OK).json({
                success: true,
                data: category
            })
        }
        catch (e) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'error/500'
            })
        }
    }

}
