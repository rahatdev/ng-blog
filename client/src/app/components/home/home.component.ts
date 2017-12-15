import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IBlogpost } from '../../models/blogpost';
import { BlogpostService } from '../../services/blogpost.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  posts: IBlogpost[];
  allPosts: IBlogpost[]; 
  //should this be handled using a messaging/observer deisgn pattern, 
  // or just ngIf and different array of blogposts?  Second option is slower
  // and more resource intensive, since there would be 2x data held.

  constructor(
    private _blogposts: BlogpostService,
    private _auth: AuthService
  ) { }

  ngOnInit() {
    this.refreshPosts();
  }

  refreshPosts(){
    this.posts = []
    this._blogposts.getAllPosts().subscribe(data => {
      //console.log(data.blogposts)
      let posts = data.blogposts
      posts.forEach(post => {
        //console.log(post)
        this.posts.push({
          id: post.id,
          date: new Date(),
          author: post.author,
          title: post.title,
          content: post.content,
          public: post.public
        })
      });
    })
  }

}
