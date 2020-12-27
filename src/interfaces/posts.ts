import { Document } from 'mongoose';

export interface Post extends Document {
    readonly title: string;
    readonly slug: string;
    readonly thumbnail: string;
    readonly content: string;
    readonly status: string;
}