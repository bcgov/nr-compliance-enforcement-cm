import { CreateActionTypeActionXrefInput } from './create-action_type_action_xref.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateActionTypeActionXrefInput extends PartialType(CreateActionTypeActionXrefInput) {
  id: number;
}
