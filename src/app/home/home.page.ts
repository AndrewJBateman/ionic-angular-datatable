import { Component } from '@angular/core';

import data from '../../assets/company.json';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public companies = data;
	tableStyle = 'bootstrap';
	customRowClass = false;

	constructor() {
		console.log(this.companies);
	}

	switchStyle() {
		if (this.tableStyle === 'dark') {
			this.tableStyle = 'bootstrap';
		} else {
			this.tableStyle = 'dark';
		}
	}

	getRowClass(row) {
		const isMale = row.gender === 'male';

		if (!this.customRowClass) {
			return {};
		}
		return {
			'male-row': isMale,
			'female-row': !isMale,
		};
	}

	async open(row) {
		console.log(row);
	}
}
