import { verify } from 'jsonwebtoken';

export default class IsAuthorized {
  execute(token: string): string {
    const { sub } = verify(token, '69fc81f5a7a7fc79caa271f8f1177e07');
    return sub;
  }
}
