const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const users = [
    {id: 1, name:'Sabana', email: 'Miraz@lakar.com' },
    {id: 2, name:'Labana', email: 'Miraz@lakar.com' },
    {id: 3, name:'Kabana', email: 'Miraz@lakar.com' },
    {id: 4, name:'Eabana', email: 'Miraz@lakar.com' },
    {id: 5, name:'Pabana', email: 'Miraz@lakar.com' },
]

app.get('/', (req, res ) =>{
    res.send('Users management server is running')

});

app.post

app.get('/users',(req,res)=>{
res.send(users)
})

app.post('/users',(req, res) => {
    console.log(req.body);
})


app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})