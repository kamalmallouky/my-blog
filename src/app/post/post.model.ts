import {IUser} from './user.model';
import {IComment} from './comment.model';

export interface IPost {
  identifier?: string;
  title?: string;
  texte?: string;
  publicationDate?: Date;
  user?: IUser;
  comments?: IComment[];
  content?: string;
}
