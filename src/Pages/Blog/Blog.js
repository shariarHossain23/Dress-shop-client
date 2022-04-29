import React from "react";

const Blog = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">BLog</h1>
      <div className="container gx-5">
        <div className="row">
          <div className="col-md-6 mt-4">
            <h3 className="">
              Difference Between Javascript and Node js
            </h3>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 mt-4">
                  <h4 className="text-center">Javascricpt</h4>
                  <ul>
                    <ol>
                      <li>
                        javascript is a programming language that is used for
                        writing scripts on the website.{" "}
                      </li>
                      <li>javascript can run Browser</li>
                      <li>javascript mostly used client side</li>
                      <li>javascript used client side development</li>
                      <li>
                        javascript upgrade version es6 that use chrome v8 engine
                        written c++
                      </li>
                    </ol>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4 className="text-center">NodeJs</h4>
                  <ul>
                    <ol>
                      <li>NodeJS is a Javascript runtime environment.</li>
                      <li>we can run javascript help of node js</li>
                      <li>nodejs used serverside</li>
                      <li>Nodejs used server side development</li>
                      <li>Nodejs written c,c++ and javascript</li>
                    </ol>
                  </ul>
                </div>
                ;
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
              <h3>Difference between sql and nosql database</h3>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <h4 className="text-center">sql</h4>
                          <ul>
                              <ol>
                                  <li>relational database system</li>
                                  <li>These databases are not suited for hierarchical data storage.</li>
                                  <li>Vertically Scalable</li>
                                  <li>These databases are best suited for complex queries</li>
                                  <li>Follows ACID property</li>
                              </ol>
                          </ul>
                      </div>
                      <div className="col-md-6">
                          <h4>Nosql</h4>
                          <ol>
                              <li>Non-relational or distributed database system.</li>
                              <li> hierarchical data storage.	These databases are best suited for hierarchical data storage.</li>
                              <li> 	Horizontally scalable</li>
                              <li> 	These databases are not so good for complex queries</li>
                              <li>Follows cap</li>
                          </ol>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col-md-6 mt-4">
              <h4>What is the purpose of jwt and how does it work</h4>
              <p> JSON Web Token, is an open standard used to share security information between two parties a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
              jwts differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
              </p>
          </div>
          <div className="col-md-6 mt-4">
              <h4>When should you use nodejs and when should you use mongodb?</h4>
              <p>
              Node.js is popularly being used in web applications because it lets the application run while it is fetching data from the backend server. It is asynchronous, event-driven and helps to build scalable web applications. Even though Node.js works well with MySQL database, the perfect combination is a NoSQL like MongoDB wherein the schema need not be well-structured. MongoDB represents the data as a collection of documents rather than tables related by foreign keys. This makes it possible for the varied types of data dealt over the internet to be stored decently and accessed in the web applications using Node.js. Another option is using CouchDB that also stores the data as JSON/BSON environment.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
