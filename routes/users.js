
import express from "express";

import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


import {createUser, getUserById, deletUser, updateUser} from '../controllers/users.js'

const router = express.Router();


router.get('/', (req, res) => {

    //console.log(users);
    res.send(users);
})

router.post('/', createUser);

router.get('/:id', getUserById);

router.delete('/:id', deletUser);

router.patch('/:id', updateUser);


export default router;