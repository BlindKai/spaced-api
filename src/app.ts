import Express from "express";
import { ExpressController } from "./http/ExpressController";
import { listSubjects, findSubject } from "./components/Subject/controllers";

const app = Express();

app.get("/", ExpressController(listSubjects));
app.get("/:subjectId", ExpressController(findSubject));

export { app };
