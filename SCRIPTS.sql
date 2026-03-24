CREATE TABLE [Client](
	id INT IDENTITY(1,1) primary key,
	document VARCHAR(20),
	fullName VARCHAR(200)
)
GO

CREATE TABLE [Order](
	id INT IDENTITY(1,1) primary key,
	createdAt DATETIME,
	total NUMERIC(18,2) NOT NULL,
	clientId int,
	CONSTRAINT FK_client_id FOREIGN KEY (clientId) REFERENCES  Client(id)
)
GO

INSERT INTO Client(document, fullName) 
		VALUES('1234567890','Daniel Perez'),
			  ('0987654321','Ana Gomez'),
			  ('1029384756','Marco Castillo')
GO

INSERT INTO [Order](createdAt, clientId, total) 
		VALUES(GETDATE(),2,5000),
			  (GETDATE(),3,20000),
			  (GETDATE(),1,45000),
			  (GETDATE(),3,109000),
			  (GETDATE(),2,70000)
GO

