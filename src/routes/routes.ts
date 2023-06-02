import { Router } from "express";
import { getBooks , postBook , deleteBook, putBook} from "../controllers/controllers";

const router = Router()

router.get('/books', getBooks);
router.post('/books', postBook);
router.delete('/books/:index',deleteBook);
router.put('/books/:id' , putBook)

export default router;