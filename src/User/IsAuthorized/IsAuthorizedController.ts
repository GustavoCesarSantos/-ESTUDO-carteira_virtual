import IsAuthorized from './IsAuthorized';

export default class IsAuthorizedController {
  isAuthorized(authToken: any): string {
    const [, token] = authToken.split(' ');
    const isAuthenticated = new IsAuthorized();
    const sub = isAuthenticated.execute(token);
    return sub;
  }
}
