import express from "express";

import user from "../controllers/user.js";

export const userRoutes = express.Router()



userRoutes.post('/send-code', user.sendCode)
userRoutes.post('/login', user.login)
userRoutes.post('/logout', user.logout)
userRoutes.get('/refresh', user.refresh)
/*
*
*
* eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidmtJZCI6IjMxODA1OTI2NiIsImlhdCI6MTcwNTA1Mzg2NiwiZXhwIjoxNzA3NjQ1ODY2fQ.iToD_LNkD708U5tkluwVTocdxtMt40RXaDwZToL7VW0
*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidmtJZCI6IjMxODA1OTI2NiIsImlhdCI6MTcwNTA1Mzk0NSwiZXhwIjoxNzA3NjQ1OTQ1fQ.bNE2u81x55GXksmCHxSZXDHhBI97roAuUdLQqc-5QEY
* */