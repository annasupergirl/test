import { 
	Component, 
	Input, 
	ViewChildren, 
	QueryList, 
	ChangeDetectionStrategy, 
	AfterViewInit
} from '@angular/core';
import { IData } from '../dasboard.models';
import { SVGAnimElement } from './bar-chart.models';

@Component({
	selector: 'bar-chart',
	templateUrl: './bar-chart.component.html',
	styleUrls: ['./bar-chart.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartComponent implements AfterViewInit {
	@Input()
	data: IData;

	coordinateX = ['100', '170', '240', '310', '380', '450', '520', '590', '660', '730', '800', '860']

	@ViewChildren('svgContex')
	svgContex: QueryList<any>;

	Array = Array;

	ngOnChanges() {
		if (this.svgContex) {
			this.drawBarChart(true);
		}
	}

	drawBarChart(isDeleteRect?: boolean) {
		const url = 'http://www.w3.org/2000/svg';
		let activeElement = this.svgContex.toArray()[0].nativeElement;
		let arr = activeElement.getElementsByClassName('bar');
		for(let i = 0; i < arr.length; i++) {
			if (isDeleteRect) {
				let rect = arr[i].getElementsByTagName('rect');
				rect[0].remove();
			}

			let newRect = document.createElementNS(url,'rect');
			newRect.setAttribute('height', this.data.countData[i]);
			newRect.setAttribute('y', '-10');
			newRect.setAttribute('width', '30');
			newRect.setAttribute('x', this.coordinateX[i]);

			let animation = <SVGAnimElement>document.createElementNS(url, 'animate');
			animation.setAttribute('attributeName', 'height');
			animation.setAttribute('from', '-10');
			animation.setAttribute('to', this.data.countData[i]);
			animation.setAttribute('dur', '0.5s');
			animation.setAttribute('fill', 'freeze');
			animation.setAttribute('begin', 'indefinite');
			newRect.append(animation);
			
			arr[i].append(newRect);
			animation.beginElement();
		}
	}

	ngAfterViewInit() {
		this.drawBarChart();
	}
}
