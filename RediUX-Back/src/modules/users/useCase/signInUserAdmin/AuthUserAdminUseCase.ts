import { container, inject, injectable } from "tsyringe";
import { EncryptProvider } from "../../../../shared/container/providers/encrypt-provider";
import { IUserRepository } from "../../repository/interface/IUserRepository";
import { sign } from "jsonwebtoken";
interface IResponse {
  user: {
    id: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthUserAdminUseCase {
  constructor(
    @inject("UserRepository")
    private repository: IUserRepository,
  ) {}

  async execute({ email, password }) {
    const user = await this.repository.findByEmail(email);
    const encryptProvider = container.resolve(EncryptProvider);
    if (!user) {
      throw new Error("User not found");
    }

    const passwordIsValid = await encryptProvider.compare(
      password,
      user.password,
    );

    if (!passwordIsValid) {
      throw new Error("Invalid password");
    }

    const token = sign({}, "6c42b2e01bafd16f1ac50e358a679f6d", {
      subject: user.email,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };

    return tokenReturn;
  }
}

export { AuthUserAdminUseCase };
