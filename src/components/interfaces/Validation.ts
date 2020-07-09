import { ValidationResult } from ".";

export interface Validation<DTO> {
  validate(dto: DTO): ValidationResult<DTO>;
}
