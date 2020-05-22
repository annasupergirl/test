import { Routes } from '@angular/router';

export const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'first',
		pathMatch: 'full',
	},
	{
		path: 'first',
		loadChildren: () => import('./first/first.module').then(m => m.FirstModule),
	},
	{
		path: 'second',
		loadChildren: () => import('./second/second.module').then(m => m.SecondModule),
	},
	{
		path: 'third',
		loadChildren: () => import('./third/third.module').then(m => m.ThirdModule),
	},
];
