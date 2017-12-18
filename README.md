#### Current tasks
- edit post (also make public)
    - communication between components
    - add update post to backend
    - 
- connect to cloud mdb? aws?

-  edit/new post/ extend viewo n same page to turn into SPA?ß

# blog
Simple MEAN blog

## Project

### Phase 1 - Current
* only authenticated logged in user can post or update blogposts
* all blog posts publicly available

### Phase 2 
* add security to 

### Phase 3
* Blogpost tags
* blogposts linked to other blogposts
* blogpost hierarchy


## Todo
- [ ] Connect to mdb server
- [ ] Backend
    * [x] models
        * [x] user 
        * [x] blogpost 
            * [x] autehntication for create and edit
    * [x] backend routes
    * [ ]Unit tests
    * [ ]Catch errors/improve stability
    * [ ]Linting
- [ ] Front end 
    * [x] baseline components 
    * [x] navbar
        * [ ] expandable login
        * [x] Routes
        * [x] show/hide buttons based on login
    * [x] home
        * show only public posts if not logged in
        * logged in 
            - show all posts
            - posts show public or private indicators
            - posts show edit button
            - new post action available
            - edit post action available
    * [ ] login
        * implement expanding/shrinking login screen
        * guard against multiple password attempts
        * improve security against bots

    
- [ ] Move to AWS

- Home page/posts should refresh after login and login


========================================================================================
## Architecture

### Project Structure
[Potential Structures](https://gist.github.com/lancejpollard/1398757)
```
|-- app
|   |-- controllers
|   |-- models
|   |-- views
|   `-- client
|       |-- controllers
|       |-- models
|       `-- views
```

### Models

User = {
    name,
    username,
    email,
    password,
    accessLevel
}

AccessLevel = [view, edit, admin]

BlogPost = {
    title,
    text,
    author,
    date,
    lastUpdate
}


### Styles
 [Bootswatch - Darkly](https://bootswatch.com/darkly/)

