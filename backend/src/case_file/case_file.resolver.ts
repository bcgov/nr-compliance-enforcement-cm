import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CaseFileService } from './case_file.service';
import { CreateCaseFileInput } from './dto/create-case_file.input';
import { UpdateCaseFileInput } from './dto/update-case_file.input';

@Resolver('CaseFile')
export class CaseFileResolver {
  constructor(private readonly caseFileService: CaseFileService) { }

  @Mutation('createCaseFile')
  create(@Args('createCaseFileInput') createCaseFileInput: CreateCaseFileInput) {
    return this.caseFileService.create(createCaseFileInput);
  }

  @Query('getCaseFile')
  findOne(@Args('case_guid') case_guid: string) {
    return this.caseFileService.findOne(case_guid);
  }

  @Mutation('updateCaseFile')
  update(@Args('updateCaseFileInput') updateCaseFileInput: UpdateCaseFileInput) {
    return this.caseFileService.update(updateCaseFileInput.case_file_guid, updateCaseFileInput);
  }

  @Mutation('removeCaseFile')
  remove(@Args('id') id: number) {
    return this.caseFileService.remove(id);
  }
}
