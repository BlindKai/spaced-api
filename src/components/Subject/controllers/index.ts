import { ListSubjects } from "./ListSubjects";
import { SubjectRepository } from "../repositories/SubjectRepository";

const subjectsRepository = new SubjectRepository();
const listSubjects = new ListSubjects(subjectsRepository);

export { listSubjects };
