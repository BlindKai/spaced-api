import { Interactor } from "../../interfaces/Interactor";
import { RequestModel, ResponseModel } from "../../interfaces";
import { AbstractSubjectRepository } from "../repositories/AbstractSubjectRepository";

export class ListSubjects extends Interactor {
  private readonly _subjectRepo: AbstractSubjectRepository;

  constructor(subjectsRepo: AbstractSubjectRepository) {
    super();
    this._subjectRepo = subjectsRepo;
  }

  async executeImpl({ params }: RequestModel): Promise<ResponseModel> {
    const subjects = await this.subjects.find(params.subjectId);
    return Array.isArray(subjects) ? ListSubjects.ok(subjects) : ListSubjects.notFound();
  }

  get subjects() {
    return this._subjectRepo;
  }
}
