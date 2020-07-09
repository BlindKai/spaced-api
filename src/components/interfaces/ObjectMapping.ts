export interface ObjectMapping<T, DTO> {
  fromDto(dto: DTO): T;
  toDto(entity: T): DTO;
}
