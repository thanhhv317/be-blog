import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model, Types } from 'mongoose';
import { Post } from 'src/interfaces';

@Injectable()
export class PostsService {
    constructor(@InjectModel('posts') private readonly _postModel: Model<Post>) { }

    async posts(skip: number, limit: number): Promise<Post[]> {
        const posts = await this._postModel.find({ status: "ACTIVE"})
            .populate('category', 'name _id', 'categories', {status: "ACTIVE"})
            .populate('authorId', 'username fullname _id', 'users', {status: "ACTIVE"})
            .sort({ createdAt: "desc" })
            .skip(skip)
            .limit(limit);
        return posts;
    }

    async post(id: string): Promise<Post> {
        const post = await  this._postModel.findOne({ status: "ACTIVE", _id: Types.ObjectId(id)})
            .populate('category', 'name _id', 'categories', {status: "ACTIVE"})
            .populate('authorId', 'username fullname _id', 'users', {status: "ACTIVE"})
        return post;
    }

    async postWithCategoryId(id: string, skip: number, limit: number): Promise<Post[]> {
        const posts = await this._postModel.find({ status: "ACTIVE", category: Types.ObjectId(id)})
            .populate('category', 'name _id', 'categories', {status: "ACTIVE"})
            .populate('authorId', 'username fullname _id', 'users', {status: "ACTIVE"})
            .sort({ createdAt: "desc" })
            .skip(skip)
            .limit(limit);
        return posts;
    }

    async checkPostExist(id: Types.ObjectId): Promise<any> {
        const post = await this._postModel.findById(id).select("_id title");
        return post;
    }

}
