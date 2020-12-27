import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Types } from 'mongoose';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dtos';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
    constructor( 
        private readonly  _commentService: CommentsService,
        ) { }

    @Get('/:id')
    async getCommentsByPostId(@Param('id') id: string, @Res() res) {
        try {
            const comments = await this._commentService.getCommentByPostId(id);
            return res.status(HttpStatus.OK).json({
                success: true,
                data: comments
            })
        } catch (e) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'error/500'
            })
        }
    }

    @Post('/')
    async addCommentByPostId(@Body() createCommentDto: CreateCommentDto , @Res() res) {
        try {
            let cmt = {...createCommentDto};
            cmt.postId = Types.ObjectId(cmt.postId);
            const comment = await this._commentService.addComment(cmt);
            return res.status(HttpStatus.OK).json({
                success: true,
                data: comment
            })
        } catch (e) {
            console.log(e)
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'error/500'
            })
        }
    }
}
