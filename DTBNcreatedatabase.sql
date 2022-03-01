CREATE DATABASE dtbn; 
USE dtbn; 

CREATE TABLE book (
	ISBN char(13) NOT NULL, 
	title varchar(65535) NOT NULL, 
	department varchar(6) NOT NULL, #can be null ? 
	PRIMARY KEY (ISBN)
);

CREATE TABLE author ( #do we even need an author ID? 
	ISBN char(13) NOT NULL, 
	fname varchar(30) NOT NULL, 
	lname varchar(30) NOT NULL, #assuming names are not longer than 30 characters 
	FOREIGN KEY (ISBN) REFERENCES book(ISBN)
	PRIMARY KEY (ISBN, fname, lname)
);

CREATE TABLE profile (
	email varchar(50) NOT NULL, 
	fname varchar(30) NOT NULL, 
	lname varchar(30) NOT NULL, 
	password varchar(20) NOT NULL, 
	bio TINYTEXT,
	rating DECIMAL(3,2) NOT NULL,  #rating can be null? is 64 too big? 
	PRIMARY KEY (email) 
);


CREATE TABLE listing (
	ISBN char(13) NOT NULL, 
	email varchar(50) NOT NULL, 
	askPrice DECIMAL(5,2) NOT NULL, 
	description TEXT(1000) NOT NULL, #can be null? 
	condition ENUM('New', 'Excellent', 'Good', 'Fair', 'Poor') , 
	LID int NOT NULL AUTO_INCREMENT, 
	PRIMARY KEY (LID),
	FOREIGN KEY (ISBN) REFERENCES book(ISBN), 
	FOREIGN KEY (email) REFERENCES profile(email)
);

CREATE TABLE bookmarks (
	marked_LID int NOT NULL, 
	email varchar(50) NOT NULL, 
	FOREIGN KEY (email) REFERENCES profile(email),
	FOREIGN KEY (marked_LID) REFERENCES listing(LID), 
	PRIMARY KEY (marked_LID, email)
);



#gotta create chat tables still!!






