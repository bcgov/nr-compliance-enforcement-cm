import { CreateCaseFileInput } from './create-case_file.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCaseFileInput extends PartialType(CreateCaseFileInput) {
  id: number;
}
