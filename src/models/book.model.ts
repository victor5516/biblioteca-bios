import mongoose, {Document, Schema} from "mongoose";


interface BookModel extends Document {
    title: string;
    description: string;
    author: string;
    available: boolean;
    code: string;
}

const BookSchema: Schema = new Schema<BookModel>({
    title: { type: String, required: true, index: true },
    description: String,
    author: { type: String, required: true, index: true },
    available: { type: Boolean, default: true },
    code: { type: String, required: true, index: true, minlength: 5}
});

export default mongoose.model<BookModel>('Book', BookSchema);