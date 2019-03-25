To start app run the following commands

`npm i`

`npm run dev:server`

Open another terminal window in project directory

`npm run dev`

change files inside client folder.

open http://localhost:8080 to view app

#API DOC:

URL: `http://localhost:8080`

##`GET` `URL/boards`
 
params: no
response: 
```
    [
        {
            title: String,
            id: Number,
            tasks: [
                text: String,
                id: Number,
                completed: Boolean
            ]
        }
    ]
```
returns all boards data

##`POST` `URL/board` 

params:
```
    {
        title: String
    }
```
response:
```
{
    id: Number
}
```

creates new board with provided `title` and return board `id`

##`PUT` `URL/board/:id` 

params:
```
    {
        title: String
    }
```
updates board param, returns `200` on success

##`DELETE` `URL/board/:id` 

deletes board with provided `id`, returns `200` on success 

##`POST` `URL/task/:boardId`

params:
 ```
     {
         text: String
     }
 ```
response: 
```
   {
        taskId: Number
   }
```
creates new task into provided board `boardId`, and returns `taskId`

##`PUT` `URL/task/:boardId/:taskId`
params: 
 ```
     {
         completed: Boolean
     }
 ```
updates task with provided `taskId` in provided `boardId`, returns `200` on success