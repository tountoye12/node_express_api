
import express from "express";

import { v4 as uuidv4 } from 'uuid';
//uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const router = express.Router();


const users = [
    {   
        id: uuidv4(),
        firstName: "Diallo",
        lastName: "Alpha",
        age: 100
    },
    {   id: uuidv4(),
        firstName: "Bah",
        lastName: "Madiou",
        age: 100
    }
]

router.get('/', (req, res) => {

    console.log(users);
    res.send(users);
})


router.post('/', (req, res) => {

    const user = req.body
    // const newUser  = {id:uuidv4(), ...user}
    // users.push(newUser)
    users.push({id:uuidv4(), ...user})
    //console.log(users);
    res.send(users)
})


export default router;