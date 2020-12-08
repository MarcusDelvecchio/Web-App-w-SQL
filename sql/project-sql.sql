SELECT * FROM `3309`.Shift WHERE endTime IS NULL;
INSERT INTO ${this.database}Driver (DriverAddress, DriverID, driverName) VALUES ('${address}', '${id}', '${name}');
INSERT INTO ${this.database}Shift (driverId, shiftDate, startTime, endTime) VALUES ('${driverId}', '${shiftDate}', '${startTime}', '${endTime}');
SELECT Driver.driverID, licensePlate FROM `3309`.Driver JOIN `3309`.Vehicle ON Driver.driverID = Vehicle.driverID;
SELECT driverID, licensePlate, kmLeft FROM `3309`.Vehicle WHERE EXISTS (SELECT licensePlate FROM `3309`.Vehicle WHERE Vehicle.kmLeft > 70);
SELECT productName, productISBN, productPrice FROM Product WHERE productPrice < "+price+" GROUP BY productName, productISBN, productPrice;