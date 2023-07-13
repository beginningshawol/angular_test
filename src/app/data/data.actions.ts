import { createAction, props } from '@ngrx/store';
import { Movie } from './data.interface';

export const loadData = createAction('[Data] Load Data');
export const loadDataSuccess = createAction('[Data] Load Data Success', props<{ movies: Movie[] }>());
export const loadDataFailure = createAction('[Data] Load Data Failure', props<{ error: any }>());