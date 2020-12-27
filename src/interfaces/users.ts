import { Document } from 'mongoose';

export interface User extends Document {
    readonly username: string;
    readonly fullname: string;
    readonly level: number;
    readonly status: string;
}