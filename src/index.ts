import express from 'express';
import booksRouter from './routes/books.routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = 3000;

app.use('/api/v1/book', booksRouter);
const connectionStr = 'mongodb://localhost:27017/bioslibrary';
mongoose.connect(connectionStr,{
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
 } as mongoose.ConnectOptions)

 const db = mongoose.connection;

 db.on('error', console.error.bind(console, 'connection error:'));
 db.once('open', function() {
    console.log('Connected to MongoDB');
    });


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
