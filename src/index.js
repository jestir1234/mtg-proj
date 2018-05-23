// Test
const someFunction = () => console.log("cat");
const someOtherFunction = () => console.log("poop");
import colors from "colors";
import Hapi from "hapi";
import { findCard } from "./controllers";

const server = Hapi.server({
  host: "localhost",
  port: 8000
});

server.route({
  method: "GET",
  path: "/notes",
  handler: (request, h) => {
    return {
      notes: "This is your potato. Edit this to start saving your notes!"
    };
  }
});

server.route({
  method: "GET",
  path: "/cards",
  handler: (request, h) => {
    return server.methods.findCards(request.query);
  }
});

server.method("findCards", findCard, {
  cache: {
    expiresIn: 60000,
    staleIn: 30000,
    staleTimeout: 10000,
    generateTimeout: 10000
  },
  generateKey: result => {
    return result.name;
  }
});

const start = async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log("Server running at:", server.info.uri.underline.red);
};

start();
