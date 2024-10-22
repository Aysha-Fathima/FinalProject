create database UserTaxInfo;

use UserTaxInfo;

-- Create userData table
CREATE TABLE userData
(
	userId INT PRIMARY KEY IDENTITY(100, 1), 
	userName VARCHAR(30),
	panCardNumber VARCHAR(15),
	gender VARCHAR(7),
	mobileNumber VARCHAR(15),
	email VARCHAR(30),
	userAddress VARCHAR(100),
	dateOfBirth DATE,
	age AS DATEDIFF(YEAR, dateOfBirth, GETDATE()) - 
		CASE 
			WHEN MONTH(dateOfBirth) > MONTH(GETDATE()) 
				OR (MONTH(dateOfBirth) = MONTH(GETDATE()) AND DAY(dateOfBirth) > DAY(GETDATE())) 
			THEN 1 
			ELSE 0 
		END
);

-- Create taxInfo table with a foreign key referencing userData(userId)
create table taxInfo
(	
	taxInfoId int primary key identity(1000, 1), 
	userId int, -- Foreign key to userData
	assessmentYear int,
	incomeSalary float,
	incomeFromProperty float,
	municipalTaxPaid float,
	shortTermCapitalGains float,
	longTermCapitalGains float,
	OtherBankInterest float,
	OtherWinLottery float,
	grossTotalIncome float, -- calculated in front end
	totalDeduction float,
	advanceTaxPaid float,
	foreign key (userId) references userData(userId) -- Foreign key constraint
 ); 
  -- Insert data into userData table
INSERT INTO userData (userName, panCardNumber, gender, mobileNumber, email, userAddress, dateOfBirth)
VALUES 
('John Doe', 'ABCDE1234F', 'Male', '9876543210', 'johndoe@example.com', '123 Main Street', '1985-05-15'),
('Jane Smith', 'WXYZ9876L', 'Female', '9123456789', 'janesmith@example.com', '456 Oak Avenue', '1990-09-25'),
('Alice Johnson', 'QRST4321B', 'Female', '9988776655', 'alicej@example.com', '789 Pine Road', '1982-12-01');

-- Insert data into taxInfo table
INSERT INTO taxInfo (userId, assessmentYear, incomeSalary, incomeFromProperty, municipalTaxPaid, shortTermCapitalGains, longTermCapitalGains, OtherBankInterest, OtherWinLottery, grossTotalIncome, totalDeduction, advanceTaxPaid)
VALUES 
(100, 2023, 850000, 15000, 2000, 5000, 10000, 800, 10000, 880800, 50000, 10000),
(101, 2023, 950000, 20000, 3000, 6000, 15000, 1200, 0, 992200, 70000, 5000),
(102, 2024, 780000, 10000, 2500, 4000, 8000, 600, 0, 803600, 40000, 9000);
);
