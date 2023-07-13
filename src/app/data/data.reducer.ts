import { createReducer, on } from '@ngrx/store';
import { loadDataSuccess, loadDataFailure } from './data.actions';
import { Movie } from './data.interface';

export interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: any;
}

export const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null
};

export const dataReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, { movies }) => ({
    ...state,
    movies,
    loading: false,
    error: null
  })),
  on(loadDataFailure, (state, { error }) => ({
    ...state,
    movies: [],
    loading: false,
    error
  }))
);