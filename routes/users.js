
import express from "express";

const router = express.Router();


const users = [
    {
        firstName: "Diallo",
        lastName: "Alpha",
        age: 100
    },
    {
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
    users.push(req.body)
    console.log(users);
    res.send(users)
})


export default router;