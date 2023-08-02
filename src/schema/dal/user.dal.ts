import User, { UserInput, UserOutput } from "../models/User.model";

export class UserDAL {
  static async createUser(userData: UserInput): Promise<UserOutput> {
    const user = await User.create(userData);
    return user;
  }

  static async getUserByEmail(email: string): Promise<UserOutput | null> {
    const user = await User.findOne({ where: { email } });
    return user;
  }
}