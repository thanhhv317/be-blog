import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Query, Req, Res } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags, ApiQuery } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {

    constructor( private readonly  _postService: PostsService ) { }

    @ApiQuery({name:'perpage', type: Number, required: false})
    @ApiQuery({name:'limit', type: Number, required: false})
    @Get('')
    async getList(@Req() req, @Res() res ) {
        try {
            const { limit, perpage } = req.query;
            let skip = Number(limit) * (Number(perpage) - 1);
            const posts = await this._postService.posts(skip, Number(limit));
            return res.status(HttpStatus.OK).json({
                success: true,
                data: posts,
                limit,
                perpage
            })
        } catch(e) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'error/500'
            })
        }
    }

    @Get('/:id')
    async getPost(@Param('id') id: string, @Res() res ) {
        try {
            const post = await this._postService.post(id);
            if (!post) throw new NotFoundException('Post does not exist!');
            return res.status(HttpStatus.OK).json({
                success: true,
                data: post
            })
        } catch(e) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'error/500'
            })
        }
    }

    @ApiQuery({name:'perpage', type: Number, required: false})
    @ApiQuery({name:'limit', type: Number, required: false})
    @Get('/categories/:id')
    async getPostByCategoryId(@Param('id') id: string, @Req() req, @Res() res ) {
        try {
            const { limit, perpage } = req.query;
            let skip = Number(limit) * (Number(perpage) - 1);
            const posts = await this._postService.postWithCategoryId(id, skip, Number(limit));
            return res.status(HttpStatus.OK).json({
                success: true,
                data: posts,
                limit,
                perpage
            })
        } catch (e) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                success: false,
                message: 'error/500'
            })
        }
    }

}
