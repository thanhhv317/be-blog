import { Document } from 'mongoose';

export interface Comment extends Document {
    readonly status: string;
    readonly name: string;
    readonly email: string;
    readonly comment: string;
}