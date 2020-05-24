import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DashboardState } from './dashboard.state';
import { Observable } from 'rxjs';
import { LoadPurchasesCount, LoadReturnsCount } from './dashboard.actions';
import { IData } from './dasboard.models';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @Select(DashboardState.getPurchasesCount)
	purchasesCount$: Observable<IData>;

	@Select(DashboardState.getReturnsCount)
	returnsCount$: Observable<IData>;

  timerId: any;

  constructor(private store: Store) {}

  ngOnInit() {
    let self = this;  
		this.timerId = setTimeout(function tick() {
			self.store.dispatch([
				new LoadPurchasesCount(),
				new LoadReturnsCount()
      ])
			self.timerId = setTimeout(tick, 30000);
    }, 30000);
  }

  stopTimer() {
    clearInterval(this.timerId)
  }
}
