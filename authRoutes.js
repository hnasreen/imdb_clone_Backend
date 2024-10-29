import express from 'express';
import { login, register } from './controller/userController.js';
import authMiddleware from './authMiddleware.js';
import { addMovie,  deleteMovie,  getAllMovies, getMovieById, updateMovie} from './controller/movieController.js';
import { addProducer, getAllProducers } from './controller/producerController.js';
import { addActor, getAllActors } from './controller/actorController.js';
const router = express.Router();

router.post('/register',register);
router.post('/login',login);

router.get('/producers', getAllProducers);
router.post('/addActor',authMiddleware,addActor)
router.get('/actors', getAllActors);
router.post('/addProducer',authMiddleware,addProducer)

router.get('/getAllMovie',getAllMovies);
router.get('/:id', getMovieById);
router.post('/addMovie', authMiddleware, addMovie)
router.put('/:id', authMiddleware,updateMovie)
router.delete('/deleteMovie/:id',authMiddleware,deleteMovie)


export default router;