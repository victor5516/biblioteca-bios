import { Request, Response } from "express";
import { getBooksService, createBookService, updateBookService, deleteBookService } from "../services/book.service";


export const getBooks = async (req: Request, res: Response) => {
    const query = req.query;
    const {book, error} = await getBooksService(query);
    if(book?.length === 0){
        return res.status(404).json({
            message: 'Book not found'
        })
    }
    if(error){
        return res.status(400).json({
            message: 'Error getting book',
            error
        })
    }

    res.json(book);
}



export const createBook = async (req: Request, res: Response) => {
    const body = req.body;
    const { book, error} = await createBookService(body);
    if(error){
        return res.status(400).json({
            message: 'Error creating book',
            error
        })
    }
    res.json({
        book,
        message: 'Book created successfully'
    })


}

export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const body = req.body;

    const { book, error } = await updateBookService(id, body);
    if(error){
        return res.status(400).json({
            message: 'Error updating book',
            error
        })
        }
    if(!book){
        return res.status(404).json({
            message: 'Book not found'
        })
    }
    res.json({
        book,
        message: 'Book updated successfully'
    })

}

export const deleteBook = async (req:Request, res: Response) => {

   const { id } = req.params;
    const {  error, book } = await deleteBookService(id);

    if(error){
        return res.status(400).json({
            message: 'Error deleting book',
            error
        })
    }
    if(!book){
        return res.status(404).json({
            message: 'Book not found'
        })
    }

    res.json({
        message: `Book deleted successfully'`
    })


}



