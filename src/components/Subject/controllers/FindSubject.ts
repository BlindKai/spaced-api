import { Interactor } from "../../interfaces/Interactor";
import { RequestModel, ResponseModel } from "../../interfaces";
import { AbstractSubjectRepository } from "../repositories/AbstractSubjectRepository";

export class FindSubjects extends Interactor {
  private readonly subjects: AbstractSubjectRepository;

  constructor(subjectsRepo: AbstractSubjectRepository) {
    super();
    this.subjects = subjectsRepo;
  }

  async executeImpl({ params }: RequestModel): Promise<ResponseModel> {
    const subject = await this.subjects.find(params.subjectId);
    return Array.isArray(subject) ? this.ok(subject) : this.notFound();
  }
}
