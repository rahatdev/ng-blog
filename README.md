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
- [ ] Move to AWS


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


