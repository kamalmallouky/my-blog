import {IUser} from './user.model';

export interface IComment {
  id: number;
  text: string;
  date: Date;
  user: IUser;
  comments?: IComment[];
}
