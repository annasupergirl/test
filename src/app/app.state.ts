import { State, Action, Selector, StateContext, createSelector } from '@ngxs/store';

export interface IAppStateXS {
	// data: string[];
}

@State<IAppStateXS>({
	name: 'app',
	// defaults: {
	// 	data: [],
	// }
})
export class AppStateXS {

	// static abTest(experimentId: string) {
	// 	return createSelector([AppStateXS.abTests], (tests: IAbTest[]) => {
	// 		return tests.find((test) => test.experimentId === experimentId);
	// 	});
	// }

	// @Selector()
	// static getData(state: IAppStateXS): string[] {
	// 	return state.data;
	// }

	// @Selector()
	// static breadcrumbs(state: IAppStateXS): IBreadcrumbItem[] {
	// 	return state.breadcrumbs;
	// }

	// @Selector()
	// static seoPage(state: IAppStateXS): ISeoPage {
	// 	return state.seoPage || <ISeoPage>{}
	// }

	// @Selector()
	// static pageHeader(state: IAppStateXS): string {
	// 	return state.seoPage && state.seoPage.pageHeader
	// }

	// @Selector()
	// static seoText(state: IAppStateXS): string {
	// 	return state.seoPage && state.seoPage.seoText
	// }

	// @Selector()
	// static isEngVersion(state: IAppStateXS): boolean {
	// 	return state.isEngVersion;
	// }

	// @Selector()
	// static phoneNumber(state: IAppStateXS): string {
	// 	return state.phoneNumber;
	// }

	// @Action(SetAbTests)
	// setAbTests({ patchState }: StateContext<IAppStateXS>, { abTests }: SetAbTests) {
	// 	patchState({ abTests });
	// }

	// @Action(IsEngVersion)
	// IsEngVersion({ patchState }: StateContext<IAppStateXS>, { isEngVersion }: IsEngVersion) {
	// 	patchState({ isEngVersion });
	// }

	// @Action(SetBreadcrumbs)
	// setBreadcrumbs({ patchState }: StateContext<IAppStateXS>, { breadcrumbs }: SetBreadcrumbs) {
	// 	return patchState({ breadcrumbs })
	// }

	// @Action(SetSeoPage)
	// setSeoPage({ patchState }: StateContext<IAppStateXS>, { seoPage }: SetSeoPage) {
	// 	return patchState({ seoPage })
	// }

	// @Action(ReachGoalsYM)
	// reachGoalsYM(_: any, { goals }: ReachGoalsYM) {
	// 	goals.forEach(goal => {
	// 		if (globalMetrix) {
	// 			globalMetrix.reachGoal(goal);
	// 		}
	// 	});
	// }

	// @Action(ReachGoalGA)
	// reachGoalGA(_: any, { action, properties }: ReachGoalGA) {
	// 	gtag('event', action, properties)
	// }

	// @Action(SetPhoneNumber)
	// setPhone({ patchState }: StateContext<IAppStateXS>, { phoneNumber }: SetPhoneNumber) {
	// 	patchState({
	// 		phoneNumber
	// 	})
	// }
}
