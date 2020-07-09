import { server } from "./server";

const PORT = process.env.port || 8080;

server.listen(PORT, () => console.log("Server is running on port", PORT));
