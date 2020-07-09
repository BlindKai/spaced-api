import Joi from "@hapi/joi";

import { AbstractSubjectRepository } from "./AbstractSubjectRepository";
import { SubjectDTO } from "../SubjectDTO";
import { Subject } from "../Subject";
import { ValidationResult } from "../../interfaces/Validation";
import { findSubject } from "../controllers";

/**
 * Implementation of abstract class, provide details with chosen DBMS, mapping and validation.
 */
export class SubjectRepository implements AbstractSubjectRepository {
  async list(): Promise<Subject[] | null> {
    const fake: Subject[] = [
      {
        id: 5,
        title: "first subject",
        description: "",
        created_at: new Date(),
        updated_at: new Date(),
        times_repeated: 4,
        user_id: 5,
      },
    ];
    return fake;
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

  validate(fields: any): ValidationResult<SubjectDTO> {
    const schema = Joi.object({
      id: Joi.number().min(0).message("Wrong id format"),
      title: Joi.string().min(5).required().message("No title was provided"),
      description: Joi.string().max(255).message("Description is too long"),
      user: Joi.number().required().message("Specified user doesn't exist"),
      timesRepeated: Joi.number().min(0).message("Incorrect repeated counter"),
      createdAt: Joi.date(),
      updatedAt: Joi.date(),
    });

    const { value, error, errors } = schema.validate(fields);

    return value ? [undefined, value] : [error || errors, undefined];
  }
}
