const express = require('express')
const app = express()

const userRegister = require('./src/routes/userRegisterRouter')
const editUser=require('./src/routes/editUserRouter')
const viewUsersRouter = require('./src/routes/viewUsersRouter')
const deleteUser=require('./src/routes/deleteUserRouter')
const login=require('./src/routes/login')
const posts=require('./src/routes/postsRouter')

// const users=require('./src/routes/viewUsersRouter')


app.use(express.json())


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({ extended: true }))



//ROUTES

app.use('/userregister', userRegister)
app.use('/edituser',editUser)
app.use('/viewusers',viewUsersRouter)
app.use('/deleteuser',deleteUser)
app.use('/login',login)
app.use('/posts',posts)

//START SERVER
app.listen(5000,()=>{
  console.log("Server started at port 5000");
})