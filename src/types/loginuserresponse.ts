export interface LoginUserResponse {
  loginUser: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    token: string;
  };
}
