import { Subject } from "../Subject";
import { SubjectDTO } from "../SubjectDTO";

/**
 * This class declare interface for Subject entity gateway, that can be implemented with specific DBMS, 
 * perform dependency inversion and provide required methods for use cases.
 * Abstract class and not interface for the case if any static or predefined behavior would be required.
 * 
 * Examples:
 * 
 *    repo.list();
 *    repo.find(5);
 */
export abstract class AbstractSubjectRepository {
  abstract list(): Promise<Subject[] | null>;
  abstract find(subjectId: number): Promise<Subject[] | null>;
  abstract create(props: Subject): Promise<Subject>;
  abstract update(subjectId: number, props: Subject): Promise<boolean>;
  abstract delete(subjectId: number): Promise<boolean>;

  /**
   * Fetch all dates when it is needed to repeat it.
   * @param subjectId identifier of subject to get dates for.
   * @returns array of data objects with iteration number and suggested date
   */
  abstract dates(subjectId: number): Promise<object[] | null>;

  /**
   * Fetch all subjects that weren't repeated in time / are over dead-line.
   * @param userId identifier of user which dead-lines should be returned.
   * @returns array of data objects with deadlines
   */
  abstract late(userId: number): Promise<object[] | null>;
}
