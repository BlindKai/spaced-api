export type ValidationResult<DTO> = [undefined, DTO] | [any, undefined];

export interface Validation<DTO> {
  validate(fields: any): ValidationResult<DTO>;
}
