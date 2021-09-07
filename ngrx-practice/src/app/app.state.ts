import { USER } from '../models/user.model';

export interface AppState {
  readonly user: USER[];
}
