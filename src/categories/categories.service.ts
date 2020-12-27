import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Category } from 'src/interfaces';

@Injectable()
export class CategoriesService {
    constructor(@InjectModel('categories') private readonly _postModel: Model<Category>) { }

    async categories() : Promise <Category[]> {
        const categories = await this._postModel.find({status: "ACTIVE"}).select("_id name");
        return categories;
    }

    async category(id: string): Promise<Category> {
        const category = await this._postModel.findOne({_id: Types.ObjectId(id)}).select("_id name description");
        return category;
    }
}
