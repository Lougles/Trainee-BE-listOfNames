# Trainee-BE-listOfNames

1. cd server
2. npm i
3. create .env file with these fields: PORT, URL=mongodb+srv://admin:nimda@cluster0.hb4afuj.mongodb.net, JWT=backendtrainee
4. (POST)localhost:4321/user/registration send email and passoword to registration (all fields are required)
5. (GET)localhost:4321/user/login send your registered email and password to get a token (all fields are required)
6. (GET)localhost:4321/list you can see full list with sorting list by rating field. Don't forget to add your token in headers authorization
7. (POST)localhost:4321/list you can add new item to list. You should send name and number of rating (all fields are required)
8. (DEL)localhost:4321/list/:id you can delete item from list. You should input id after /
9. (PUT)localhost:4321/list/:id you can update item. You should send new name and rating (all fields are required)
