
let users = [
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

export const createUser = (req, res) => {

    const user = req.body
    users.push({id:uuidv4(), ...user})
    res.send(users)
};

export const getUserById =  (req, res)=> {
    const {id}  = req.params
    const user = users.find((user) => user.id == id)
    res.send(user);
};

export const deletUser = (req, res) => {
    const {id} = req.params
    const user = users.find((user) => user.id ==id)
    users = users.filter((user) => user.id != id)
    res.send(user)
};

export const updateUser = (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;

    const userToupdate = users.find((user) => user.id == id)
    if(lastName) {
        userToupdate.lastName = lastName;
    }
    if(lastName)
        userToupdate.lastName =lastName;
    if(age)
        userToupdate.age =age;
    res.send(users);
};

