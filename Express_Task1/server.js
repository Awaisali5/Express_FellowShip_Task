import express from 'express';
import path from 'path';
import posts from './routes/posts.js'
import logger from './middleware/logger.js';
import ErrorHandler from './middleware/Error.js';

import exp from 'constants';
const port= process.env.PORT || 5000


const app= express();

// body parse middleware 

app.use(express.json());
app.use(express.urlencoded({extended:false}));


//  Logger Middleware 

app.use(logger);
   

// setup static folder  #static server 
// app.use(express.static(path.join(__dirname, 'public')));


// routing 

// app.get('/', (req,res) => {
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
//     });


// Routes 
app.use('/api/posts', posts);

// ErrorHandler 

app.use(ErrorHandler);







app.listen(port,() => console.log(`Server is running on Port ${port}`));