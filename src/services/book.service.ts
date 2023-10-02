import Book from "../models/book.model";

export const getBooksService = async (query: any) => {
   //validar los campos que vienen en el query
   const { title, author, code } = query;
   const filter: any = {};
   if(title) filter.title = title;
   if(author) filter.author = author;
   if(code) filter.code = code;

   try{
       const book = await Book.find(filter);
       return {
           book
       }
   }catch(error){
       console.log(error);
       return {
           error
       }
   }
};



export const createBookService = async (book: any) => {
  const newBook = new Book(book);

  try {
    await newBook.save();
    return {
      book: newBook,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};

export const updateBookService = async (id: string, book: any) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(id, book, { new: true });
    return {
      book: updateBook,
    };
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};

export const deleteBookService = async (id: string) => {
    try {
       const book = await Book.findByIdAndDelete(id);
        return {
            book
        }
    }catch(error){
        console.log(error);
        return {
            error
        }
    }
}
