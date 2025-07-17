export enum Role {
  COS = "COS",
  COS_ADMIN = "COS Admin",
  CEEB = "CEEB",
  READ_ONLY = "READ ONLY",
  PARKS = "PARKS",
  SECTOR = "NRS",
}

export const coreRoles: Role[] = [Role.COS, Role.CEEB, Role.PARKS, Role.SECTOR];
