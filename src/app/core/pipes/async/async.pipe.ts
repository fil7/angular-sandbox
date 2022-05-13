import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from "rxjs";

@Pipe({
  name: 'appAsync',
  pure: false
})
export class AppAsyncPipe implements PipeTransform, OnDestroy {

  private _observable?: Observable<any>;
  private _value?: any;
  private _subscription?: Subscription;

  constructor(private _cdr: ChangeDetectorRef) {
  }

  transform<T>(observable?: Observable<T>): T | null {
    if (!observable) {
      return null;
    }

    if (!this._observable) {
      this._initObservable(observable);
    }

    if (this._observable !== observable) {
      this._resetObservable();
      this.transform(observable);
    }

    return this._value ?? null;
  }

  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }

  private _initObservable<T>(observable?: Observable<T>) {
    if (observable) {
      this._observable = observable;
      this._subscription = this._observable
        .subscribe((value) => {
          this._value = value;
          this._cdr.detectChanges();
        });
    }
  }

  private _resetObservable() {
    this._subscription?.unsubscribe();
    this._observable = undefined;
    this._value = undefined;
  }

}
