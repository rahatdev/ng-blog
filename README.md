

# blog
Simple MEAN blog


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

