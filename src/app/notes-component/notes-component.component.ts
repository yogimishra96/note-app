import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

export interface noteData {
	note: string;
	category: string;
}


@Component({
	selector: 'app-notes-component',
	templateUrl: './notes-component.component.html',
	styleUrls: ['./notes-component.component.css']
})
export class NotesComponentComponent implements OnInit {
	note: string = '';
	category: string  ='';


	constructor(private router: Router) { }

	public noteObject   = [{
        "note": "Room-1",
        "category": "2nd Floor"
	}];


	ngOnInit(): void {
		if (!localStorage.getItem('token')) {
			this.router.navigate(['/user-login']);
		}
	}

	saveNote() {
		console.log(this.note);
		console.log(this.category);
		// alert('this is the data');
		this.noteObject.push({ note : this.note, category : this.category});
	} 

	// onSave() {
	// 	console.log("df");
	// }
    deleteNote(data : any) {
		console.log(data);
		const index = this.noteObject.indexOf(data);
		this.noteObject.splice(index, 1);
	}

	editNote(data : any) {

	}
}