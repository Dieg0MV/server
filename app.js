import express from "express";
import http from 'http'
import { Socket } from "net";
import path from "path";
import {Server as socketServer } from "socket.io";
 
const app = express()
const server = http.createServer(app)
/* El evento io es el que sirve como socket para comunicarlo */
const io = new socketServer(server, {
    cors:{
        origin: "http://localhost:3000"
    }
})

const objets = {
    "io": io,
    "server": server,
    'express':express,
    "path":path,
    "app": express(),
} 


export default objets; 