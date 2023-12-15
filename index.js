import { createServer } from "node:http";
import { createBareServer } from "@tomphttp/bare-server-node";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import express from "express";
console.log(uvPath)
const bare = createBareServer("/bare/");
const app = express();
const port = 8080;

app.use(express.static('dist'));
app.use("/help/", express.static(uvPath));

const server = createServer();

server.on("request", (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res);
    } else {
        app(req, res);
    }
});

server.on("upgrade", (req, socket, head) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

server.listen({
    port: port,
});