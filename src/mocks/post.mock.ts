import {IPost} from '../app/post/post.model';
import * as moment from 'moment';

export const posts: IPost[] = [
  {
    identifier: '11111',
    title: 'Développement JS',
    texte: 'Le développement en JS est magique',
    publicationDate: moment('2018-07-01').toDate(),
    user: {
      username: 'toto',
      firstname: 'toto',
      lastname: 'toto'
    },
    content: ''
  },
  {
    identifier: '22222',
    title: 'Base de données',
    texte: 'Cours de base de données',
    publicationDate: moment('2018-06-30').toDate(),
    user: {
      username: 'foo',
      firstname: 'foo',
      lastname: 'foo'
    },
    content: ''
  }
]
