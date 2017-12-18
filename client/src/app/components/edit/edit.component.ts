import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BlogpostService } from '../../services/blogpost.service';
import { IBlogpost } from '../../models/blogpost';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css', '../../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {
  blogpostId: string;
  blogpostTitle: string;
  blogpostContent: string;
  isPublic: boolean = false;
  isNewPost: boolean = true;

  constructor(
    private _auth: AuthService,
    private _blogposts: BlogpostService,
    private _flashMessage: FlashMessagesService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('edit component init...');
    let id = this._route.snapshot.paramMap.get('id');
    if (id) {
      this._blogposts.getPostById(id).subscribe(data => {
        let post = data.blogpost;
        console.log(post);
        if (post) {
          this.blogpostTitle = post.title,
            this.blogpostContent = post.content,
            this.isPublic = post.public,
            this.isNewPost = false
        }
      })
    }

  }

  onSaveClick() {
    let username = this._auth.getUsername();
    console.log(username);
    let blogpost: IBlogpost = {
      id: null,
      author: username,
      date: new Date(),
      title: this.blogpostTitle,
      content: this.blogpostContent,
      public: this.isPublic
    }

    if (this.isNewPost) {
      this._blogposts.putNewBlogpost(blogpost).subscribe(data => {
        if (data.success) {
          this._flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          this._router.navigate(['/home']);
        } else {
          this._flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    } else {
      this._blogposts.updateBlogpost(blogpost).subscribe(data => {
        if (data.success) {
          this._flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        } else {
          this._flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      })
    }
  }

  // createNewPost() {
  //   // TODO
  // }

  // updatePost() {
  //   // TODO
  // }
}


