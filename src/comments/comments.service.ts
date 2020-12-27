import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Comment } from 'src/interfaces';
import { CreateCommentDto } from './dtos';

@Injectable()
export class CommentsService {
    
    constructor(@InjectModel('comments') private readonly _commentModel: Model<Comment>) { }

    async getCommentByPostId(postId: string): Promise<Comment[]> {
        const comments = await this._commentModel
            .find({postId:Types.ObjectId(postId), status: 'ACTIVE'})
            .select("createAt name comment")
        return comments;
    }
    
    async addComment(createCommentDto: CreateCommentDto): Promise<any> {
        const comment = await this._commentModel.insertMany([{...createCommentDto, status: "INACTIVE"}]);
        return comment;
    }
}
