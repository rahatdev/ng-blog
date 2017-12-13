import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IBlogpost } from '../../models/blogpost'
import { BlogpostService } from '../../services/blogpost.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  posts: IBlogpost[]

  constructor(private _blogposts: BlogpostService) { }

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
