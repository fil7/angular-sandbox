import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, Observable, of } from "rxjs";
import { UserModel } from "../../models/user.model";

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserViewComponent {
  user$?: Observable<UserModel>;
  private _index: number = 0;

  updateUser() {
    const nextUser = new UserModel(`First Name ${this._index}`, `Last Name ${this._index}`);
    // pseudo BE request
    this.user$ = of(nextUser).pipe(delay(500));
    this._index++;
  }
}
