import { Interactor } from "../../interfaces/Interactor";
import { RequestModel, ResponseModel } from "../../interfaces";
import { AbstractSubjectRepository } from "../repositories/AbstractSubjectRepository";

export class CreateSubject extends Interactor {
  private readonly subjects: AbstractSubjectRepository;

  constructor(subjectsRepo: AbstractSubjectRepository) {
    super();
    this.subjects = subjectsRepo;
  }

  async executeImpl({ body }: RequestModel): Promise<ResponseModel> {
    const [error, validSubjectDTO] = this.subjects.validate(body);

    if (validSubjectDTO) {
      const subject = this.subjects.fromDto(validSubjectDTO);
      await this.subjects.create(subject);
      return this.created();
    } else {
      return this.unprocessableEntity("An error occurred while validating the data", error);
    }
  }
}
