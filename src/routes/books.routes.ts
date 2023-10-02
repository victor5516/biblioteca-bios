import { Router } from "express";

import { getBooks, createBook, updateBook, deleteBook } from "../controllers/books.controller";


const router = Router();

router.get('/', getBooks);
router.post('/', createBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);



export default router;