import { Subject } from "../Subject";
import { ObjectMapping } from "../../interfaces/ObjectMapping";
import { SubjectDTO } from "../SubjectDTO";
import { Validation } from "../../interfaces/Validation";

/**
 * This class declare interface for Subject entity gateway, that can be implemented with specific DBMS,
 * perform dependency inversion and provide required methods for use cases.
 *
 * Examples:
 *
 *    repo.list();
 *    repo.find(5);
 */
export interface AbstractSubjectRepository extends ObjectMapping<Subject, SubjectDTO>, Validation<SubjectDTO> {
  list(): Promise<Subject[] | null>;
  find(subjectId: number): Promise<Subject[] | null>;
  create(props: Subject): Promise<Subject | null>;
  update(subjectId: number, props: Subject): Promise<boolean>;
  delete(subjectId: number): Promise<boolean>;

  /**
   * Fetch all dates when it is needed to repeat it.
   * @param subjectId identifier of subject to get dates for.
   * @returns array of data objects with iteration number and suggested date
   */
  dates(subjectId: number): Promise<object[] | null>;

  /**
   * Fetch all subjects that weren't repeated in time / are over dead-line.
   * @param userId identifier of user which dead-lines should be returned.
   * @returns array of data objects with deadlines
   */
  late(userId: number): Promise<object[] | null>;
}
