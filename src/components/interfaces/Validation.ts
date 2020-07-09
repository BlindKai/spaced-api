export type ValidationError = { message: string; field: string };
export type ValidationResult<DTO> = [null | ValidationError, DTO | null];

export interface Validation<DTO> {
  validate(dto: DTO): ValidationResult<DTO>;
}
