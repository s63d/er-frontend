export class AdminUser {
  constructor(
    public id: number,
    public email: string,
    public role: Role,
    public firstName: string,
    public lastName: string,
    public address: string,
    public postal: string,
    public city: string,
  ) {}
}

export class Role {
  constructor(
    public name: string,
    public description: string
  ) {}
}
