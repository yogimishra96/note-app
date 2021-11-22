import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

export interface noteData {
	// note: string;
	// category: string;
	// categoryColor : string;
}


@Component({
	selector: 'app-notes-component',
	templateUrl: './notes-component.component.html',
	styleUrls: ['./notes-component.component.css']
})
export class NotesComponentComponent implements OnInit {
	note: string = '';
	category: string = '';
	noteId: string = '';
	isEdit: boolean = false;


	constructor(private router: Router,
	) { }

	public noteObject = [{
		"id": this.getRandomColor(),
		"note": "Room-1",
		"category": "2nd Floor",
		"categoryColor": "blue"
	}];


	ngOnInit(): void {
		if (!localStorage.getItem('token')) {
			this.router.navigate(['/user-login']);
		}
	}


	// TO save and edit.  

	saveNote() {
		if (!this.isEdit) {
			this.noteObject.push({
				id: this.getRandomColor(),
				note: this.note,
				category: this.category,
				categoryColor: this.setCategoryColor(this.category)
			});
		} else {
			this.noteObject.forEach((key, index) => {
				if (key.id === this.noteId) {
					key.categoryColor = this.setCategoryColor(this.category)
					key.note = this.note,
						key.category = this.category
				}
			});
		}
	}


	deleteNote(data: any) {
		const index = this.noteObject.indexOf(data);
		this.noteObject.splice(index, 1);
	}

	setCategoryColor(category: string) {
		let color = "";
		let obj = this.noteObject.find(o => o.category === this.category);
		if (obj) {
			return obj.categoryColor
		} else {
			return this.getRandomColor();
		}

		// return "green";
	}

	createNote() {
		this.noteId = "";
		this.note = "";
		this.category = "";
		this.isEdit = false;
	}


	// method to generate random color code used in UUID also.
	getRandomColor() {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	editNote(data: any) {
		this.noteId = data.id;
		this.note = data.note;
		this.category = data.category;
		this.isEdit = true;
	}
}