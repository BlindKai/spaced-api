import { AbstractSubjectRepository } from "./AbstractSubjectRepository";
import { Subject } from "../Subject";
import { SubjectDTO } from "../SubjectDTO";
import { ObjectMapping } from "../../interfaces/ObjectMapping";
import { Validation, ValidationResult } from "../../interfaces/Validation";

/**
 * Implementation of abstract class, provide details with chosen DBMS, mapping and validation.
 */
export class SubjectRepository extends AbstractSubjectRepository
  implements ObjectMapping<Subject, SubjectDTO>, Validation<SubjectDTO> {
  list(): Promise<Subject[] | null> {
    throw new Error("Method not implemented.");
  }

  find(subjectId: number): Promise<Subject[] | null> {
    throw new Error("Method not implemented.");
  }

  create(props: Subject): Promise<Subject> {
    throw new Error("Method not implemented.");
  }

  update(subjectId: number, props: Subject): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  delete(subjectId: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  dates(subjectId: number): Promise<object[] | null> {
    throw new Error("Method not implemented.");
  }

  late(userId: number): Promise<object[] | null> {
    throw new Error("Method not implemented.");
  }

  fromDto({ id, title, description, timesRepeated, createdAt, updatedAt, user }: SubjectDTO): Subject {
    return {
      id,
      title,
      description,
      times_repeated: timesRepeated,
      created_at: createdAt,
      updated_at: updatedAt,
      user_id: user,
    };
  }

  toDto({ id, title, description, times_repeated, created_at, updated_at, user_id }: Subject): SubjectDTO {
    return {
      id,
      title,
      description,
      timesRepeated: times_repeated,
      createdAt: created_at,
      updatedAt: updated_at,
      user: user_id,
    };
  }

  validate(dto: SubjectDTO): ValidationResult<SubjectDTO> {
    throw new Error("Method not implemented.");
  }
}
