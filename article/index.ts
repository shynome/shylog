import express = require('express')
import { render,expressTsx } from "express-tsx";
export const server = expressTsx(__dirname)
import { router } from "./router";
server.use(router)