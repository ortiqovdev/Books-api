import express, { Express } from "express";
import router from "./routes/routes";

const server: Express = express()

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(router)




server.listen(8080 , ()=>{
   console.log("Server is running on port : 8080")
})