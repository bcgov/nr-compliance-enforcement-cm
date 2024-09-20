import "dotenv/config";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { HTTPLoggerMiddleware } from "./middleware/req.res.logger";
import { PrismaModule } from "./prisma/prisma.module";
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
import { DischargeCodeModule } from "./code-tables/discharge_code/discharge_code,module";
import { NonComplianceCodeModule } from "./code-tables/non_compliance_code/non_compliance_code.module";
import { SectorCodeModule } from "./code-tables/sector_code/sector_code.module";
import { CEEBDecisionActionModule } from "./ceeb_decision_action/ceeb_decision_action.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./dist/**/*.graphql", "./src/**/*.graphql"],
    }),
    JwtAuthModule,
    AgeCodeModule,
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
