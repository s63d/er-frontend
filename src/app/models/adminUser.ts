export class AdminUser {
  constructor(
    public id: number,
    public email: String,
    public role: Role,
    public firstName: String,
    public lastName: String,
    public address: String,
    public postal: String,
    public city: String,
  ) {}
}

export class Role {
  constructor(
    public name: String,
    public description: String
  ) {}
}
