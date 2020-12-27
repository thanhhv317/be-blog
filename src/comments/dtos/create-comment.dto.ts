import { Types } from "mongoose";

export class CreateCommentDto {
    postId: any;
    name: string;
    email: string;
    comment: string;
}