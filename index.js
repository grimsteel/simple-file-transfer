import express from "express";
import { ExpressPeerServer } from "peer";
const app = express();
const server = app.listen(8080);

const peerServer = ExpressPeerServer(server, {
  path: '/',
	proxied: true
});

app.use('/broker', peerServer);
app.use(express.static("public"));
