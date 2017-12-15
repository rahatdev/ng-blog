import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BlogpostService } from '../../services/blogpost.service';
import { IBlogpost } from '../../models/blogpost';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css', '../../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {
  blogpostTitle: string;
  blogpostContent: string;
  isPublic: boolean;
  isNewPost: boolean;

  constructor(
    private _auth: AuthService,
    private _blogposts: BlogpostService
  ) { }

  ngOnInit() {
  }

  onSaveClick(){
    //create if new
    //update if existing
    let username = this._auth.getUser();
    console.log(username);
    let blogpost: IBlogpost = {
      id: '',
      author: username,
      date: new Date(),
      title: this.blogpostTitle,
      content: this.blogpostContent,
      public: this.isPublic
    }

    this._blogposts.putNewBlogpost(blogpost);

  }

}
