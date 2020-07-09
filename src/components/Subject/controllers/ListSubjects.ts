import { Interactor } from "../../interfaces/Interactor";
import { RequestModel, ResponseModel } from "../../interfaces";
import { AbstractSubjectRepository } from "../repositories/AbstractSubjectRepository";

export class ListSubjects extends Interactor {
  private readonly subjects: AbstractSubjectRepository;

  constructor(subjectsRepo: AbstractSubjectRepository) {
    super();
    this.subjects = subjectsRepo;
  }

  async executeImpl({}: RequestModel): Promise<ResponseModel> {
    const subjects = await this.subjects.list();
    return Array.isArray(subjects) ? this.ok(subjects.map(this.subjects.toDto)) : this.notFound();
  }
}
