import { catchError, of, OperatorFunction, startWith } from 'rxjs';

export type LoadedValue<T> = {
  isLoading: boolean;
  error?: Error;
  value?: T;
};

export class WithLoading {
  getLoadingValue<T>(): LoadedValue<T> {
    return { isLoading: true } as LoadedValue<T>;
  }

  buildReadyValue<T>(value: T): LoadedValue<T> {
    return {
      isLoading: false,
      value
    };
  }

  startWithLoading<T>(): OperatorFunction<LoadedValue<T>, LoadedValue<T>> {
    return startWith(this.getLoadingValue<T>());
  }

  catchLoadingError<T>(): OperatorFunction<LoadedValue<T>, LoadedValue<T>> {
    return catchError(error => {
      console.error('ERROR:', error);
      return of({ isLoading: false, error });
    });
  }
}
