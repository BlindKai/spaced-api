import { SubjectRepository } from "../repositories/SubjectRepository";
import { FindSubjects } from "./FindSubject";
import { ListSubjects } from "./ListSubjects";
import { CreateSubject } from "./CreateSubject";

const subjectsRepository = new SubjectRepository();

const listSubjects = new ListSubjects(subjectsRepository);
const findSubject = new FindSubjects(subjectsRepository);
const createSubjects = new CreateSubject(subjectsRepository);

export { listSubjects, findSubject, createSubjects };
