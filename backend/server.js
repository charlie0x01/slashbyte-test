const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;


// dummy user data
let users = [
    { id: 1, name: 'John Doe', email: 'johndeo@example.com', role: 'Senior Developer' },
    { id: 2, name: 'Jane Doe', email: 'janedeo@example.com', role: 'Junior Developer' },
    { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com', role: 'Associate Developer' },
];

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// API endpoint to get all users
app.get('/api/users', (req, res) => {
    console.log('hit!!');
  return res.json(users);
});

// API endpoint to add a new user
app.post('/api/user/new', (req, res) => {
  console.log("hit new user");
    const { name, email, role } = req.body;

    // regex pattern to validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return res.status(400).json({ error: 'Email is required!' });
    } else if(!emailRegex.test(email)) {
        return res.status(400).json({ error: 'please provide a valid email' });
    }
  
    // unique id
    const id = users.length + 1;
  
    // new user
    const newUser = { id: id, name: name, email: email, role: role };
  
    // add new user to the array
    users.push(newUser);

    return res.status(201).json({ message: "user created."});
  });

app.delete('/api/user/delete/:id', (req, res) => {
    const id = req.params.id;
    const newList = users.filter(user => user.id != id)
    users = newList;
    console.log('hit!');
    return res.status(200).json({message: "user deleted."})
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
