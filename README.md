
MyReads Project

To get started developing right away:

Install all project dependencies with npm install
start the development server with npm start

Installation and Launch :-

   To install the application clone this git repository
  $ git clone https://github.com/akshataw/my-reads1.git 
   
  $ cd myreads

Install dependencies using npm command line tool
  $ npm install

Run the application, again using npm
  $ npm start


What You're Getting
├── README.md :- This file.
|
├── SEARCH_TERMS.md :- The short collection of available search terms for you to use with your app.
|
├── package.json :- npm package manager file. It's unlikely that you'll need to modify this.
|
├── public :-
│   ├── favicon.ico :- React Icon, You may change if you wish.
|   └── index.html :- It consist of HTML code.DO NOT MODIFY
|
└── src :-
    ├── App.css :- Styles for the app. Feel free to customize this as you desire.
    ├── App.js :- This is the root of your app. Contains static HTML right now.
    ├── App.test.js :- Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js :- A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons :- Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css :- Global styles. You probably won't need to change anything here.
    └── index.js :- You should not need to modify this file. It is used for DOM rendering only.


   Backend Server :-

   To simplify your development process, we've a backend server for us to develop against. The file BooksAPI.js contains the methods we will need to perform necessary operations on the backend:
 
       1)getAll
       2)update
       3)search

     1) getAll :-

     Method Signature:

       getAll() :
         Returns a Promise which resolves to a JSON object containing a collection of book objects. This collection represents the books currently in the bookshelves in our app.


    2) update :-

     Method Signature:

       update(book, shelf) : 
           book: <Object> containing at minimum an id attribute
           shelf: <String> contains one of ["wantToRead", "currentlyReading", "read"]
              Returns a Promise which resolves to a JSON object containing the response data of the POST request.
 
    3) search :-
   
     Method Signature:

        search(query) :
        query: <String>
              Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

 
   Important :-

     The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md. That list of terms are the only terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


   
