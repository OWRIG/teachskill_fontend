export interface LoginParams {
  organization: string;
  stu_id: string;
  password: string;
}


export interface RegisterParams {
  subject: number;
  name: string;
  organization: string;
  stu_id: string;
  gender: number;
  email: string;
  password: string;
  session: number;
  description?: string;
}
