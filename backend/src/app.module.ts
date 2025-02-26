import "dotenv/config";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HTTPLoggerMiddleware } from "./middleware/req.res.logger";
import { PrismaModuleCaseManagement } from "./prisma/cm/prisma.cm.module";
import { PrismaModuleInvestigation } from "./prisma/inv/prisma.inv.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { JwtAuthModule } from "./auth/jwtauth.module";
import { AgeCodeModule } from "./age_code/age_code.module";
import { EquipmentCodeModule } from "./equipment_code/equipment_code.module";
import { SexCodeModule } from "./sex_code/sex_code.module";
import { ThreatLevelCodeModule } from "./threat_level_code/threat_level_code.module";
import { ConflictHistoryCodeModule } from "./conflict_history_code/conflict_history_code.module";
import { EarCodeModule } from "./ear_code/ear_code.module";
import { DrugCodeModule } from "./drug_code/drug_code.module";
import { DrugMethodCodeModule } from "./drug_method_code/drug_method_code.module";
import { DrugRemainingOutcomeCodeModule } from "./drug_remaining_outcome_code/drug_remaining_outcome_code.module";
import { HwcrOutcomeCodeModule } from "./hwcr_outcome_code/hwcr_outcome_code.module";
import { ConfigurationModule } from "./configuration/configuration.module";
import { CaseFileModule } from "./case_file/case_file.module";
import { InactionJustificationTypeModule } from "./inaction_justification_type/inaction_justification_type.module";
import { DateScalar } from "./common/custom_scalars";
import { HWCRPreventionActionModule } from "./hwcr_prevention_action/hwcr_prevention_action.module";
import { HWCRAssessmentActionModule } from "./hwcr_assessment_action/hwcr_assessment_action.module";
import { ScheduleCodeModule } from "./code-tables/schedule_code/schedule_code.module";
import { DischargeCodeModule } from "./code-tables/discharge_code/discharge_code.module";
import { NonComplianceCodeModule } from "./code-tables/non_compliance_code/non_compliance_code.module";
import { SectorCodeModule } from "./code-tables/sector_code/sector_code.module";
import { CEEBDecisionActionModule } from "./ceeb_decision_action/ceeb_decision_action.module";
import { AgencyCodeModule } from "./agency_code/agency_code.module";
import { ScheduleSectorXrefModule } from "./schedule_sector_xref/schedule_sector_xref.module";
import { LeadModule } from "./lead/lead.module";
import { CaseLocationCodeModule } from "./code-tables/case_location_code/case_location_code.module";
import { IpmAuthCategoryCodeModule } from "./ipm_auth_category_code/ipm_auth_category_code.module";
import { TempPocModule } from "./temp_poc/temp_poc.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModuleCaseManagement,
    PrismaModuleInvestigation,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./dist/**/*.graphql", "./src/**/*.graphql"],
    }),
    JwtAuthModule,
    AgeCodeModule,
    AgencyCodeModule,
    EquipmentCodeModule,
    SexCodeModule,
    ThreatLevelCodeModule,
    ConflictHistoryCodeModule,
    EarCodeModule,
    DrugCodeModule,
    DrugMethodCodeModule,
    DrugRemainingOutcomeCodeModule,
    HwcrOutcomeCodeModule,
    ConfigurationModule,
    HWCRAssessmentActionModule,
    HWCRPreventionActionModule,
    CaseFileModule,
    InactionJustificationTypeModule,
    ScheduleCodeModule,
    DischargeCodeModule,
    NonComplianceCodeModule,
    SectorCodeModule,
    CEEBDecisionActionModule,
    ScheduleSectorXrefModule,
    LeadModule,
    CaseLocationCodeModule,
    IpmAuthCategoryCodeModule,
    TempPocModule,
  ],
  controllers: [AppController],
  providers: [AppService, DateScalar],
})
export class AppModule {
  // let's add a middleware on all routes
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HTTPLoggerMiddleware).forRoutes("*");
  }
}
