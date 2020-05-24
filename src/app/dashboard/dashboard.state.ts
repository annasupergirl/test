import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { LoadPurchasesCount, LoadReturnsCount } from './dashboard.actions';
import { IData } from './dasboard.models';

export class DashboardStateModel {
	purchasesCount: IData;
	returnsCount: IData;
}

@State<DashboardStateModel>({
	name: 'dashboard'
})
export class DashboardState implements NgxsOnInit {
	@Selector()
	static getPurchasesCount(state: DashboardStateModel) {
		return state.purchasesCount;
	}

	@Selector()
	static getReturnsCount(state: DashboardStateModel) {
		return state.returnsCount;
	}

	ngxsOnInit({ dispatch }: StateContext<DashboardStateModel>) {
		dispatch([
			new LoadPurchasesCount(),
			new LoadReturnsCount()
		])
	}

	@Action(LoadPurchasesCount)
	async loadPurchasesCount({ patchState }: StateContext<DashboardStateModel>) {
		patchState({
			purchasesCount: {
				countData: this.fillin(),
				color: '#cb11ab'
			}
		});
	}

	@Action(LoadReturnsCount)
	async loadReturnsCount({ patchState }: StateContext<DashboardStateModel>) {
		patchState({
			returnsCount: {
				countData: this.fillin(),
				color: '#481173'
			}
		});
	}
	
	private getRandomArbitrary(min, max) {
		return Math.floor(Math.random() * (max - min) + min) + '';
	}

	private fillin() {
		let arr = [];
		for (let i = 0; i < 12; i++) {
			arr.push(this.getRandomArbitrary(1, 360));
		}
		return arr;
	}
}
