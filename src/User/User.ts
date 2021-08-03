export default class User {
  email: string

  password: string

  constructor({ email, password } : { email: string, password: string }) {
    this.email = email;
    this.password = password;
  }

  getEmail() {
    return this.email;
  }
}
