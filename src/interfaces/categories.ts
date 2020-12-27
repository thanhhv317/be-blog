import { Document } from 'mongoose';

export interface Category extends Document {
    readonly status: string;
    readonly name: string;
    readonly description: string;
}