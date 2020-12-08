import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { driverinformation } from './driverinformation';
import { locationproductquantites } from './locationproductquantities';
import { drivervehicle } from './drivervehicle';
import { displayMaxPrice } from './inputMaxPrice';
import { MatTableModule } from '@angular/material/table';

@Injectable()
export class ConfigService {

  url = "http://localhost:3300";

  // private linkstring: string = "http://localhost:3300/api/database/:query" //+this.query; ??

  constructor(private http: HttpClient, private MatTableModule: MatTableModule) { }

  driverInfoRoute(queryString: string): Observable <driverinformation[]> {
    queryString = this.convertToValid(queryString);
    //console.log(queryString);
    let query = `${this.url}/api/database/${queryString}`;
    return this.http.get<driverinformation[]>(query);
  }

  currentShifts(queryString: string) {
    // TODO: make more deezed -MD

    let query = this.convertToValid("SELECT * FROM `3309`.Shift WHERE endTime IS NULL;");
    
    return this.http.get(`${this.url}/api/database/${query}`);
  }

  locationproductconfig(queryString: string) {
    queryString = this.convertToValid(queryString);
    //console.log(queryString);
    let query = `${this.url}/api/database/${queryString}`;
    return this.http.get(query);
  }
  getdriverlicenceplate(queryString: string): Observable <drivervehicle[]> {
    queryString = this.convertToValid(queryString);
    //console.log(queryString);
    let query = `${this.url}/api/database/${queryString}`;
    return this.http.get<drivervehicle[]>(query);
  }

  maxPrice(queryString: string): Observable <displayMaxPrice[]> {
  queryString = this.convertToValid(queryString);
    //console.log(queryString);
    let query = `${this.url}/api/database/${queryString}`;
    return this.http.get<displayMaxPrice[]>(query);
  }

  convertToValid(str){
    let validQueryParam = str.replace(/ /g, "BXB");
    validQueryParam = validQueryParam.replace(/\*/g, "AXA");
    return validQueryParam;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Angular-SQL';

  constructor(private configService: ConfigService){
    this.showShiftTable = false;
    this.showNewShift = false;
  }

  // constants
  database = "`3309`.";
  
  // data members
  drivertableData;  // driver data to be rendered into the table
  columnsToDisplay = ['driverID', 'driverAddress', "driverName"];
  driverVehicles;
  currentShifts;

  // section/element toggles
  showDrivertableData;
  showLocationtableData;
  showCreateDriver
  showShiftTable;
  showNewShift;
  showProductQuantitiesLocationTable;
  showlicenseplates;
  loggedIn: boolean = false;

  // tracking and other meaningless values
  driverIdNumber;
  shiftIdNumber
  drivervehicle;
  displayMaxPrice;
  showPriceSearchResults: boolean = false;
  

  populateDriverTable(){}
  
  getDrivers(){

      // setup string
      let queryString = `SELECT * FROM ${this.database}Driver`;

      this.configService.driverInfoRoute(queryString).subscribe(data => {

          //console.log(data);

        // set the data and show it in the tables
          this.drivertableData = data;
          this.showDrivertableData = true;

        // set the id value
          this.driverIdNumber = data.length -1;
      });
  }
  

  newDriver(){
    this.showCreateDriver = !this.showCreateDriver;
  }

  submitNewDriver(){

    // get input values 
    let name = (document.getElementById("newDriverName") as HTMLInputElement).value;
    let address = (document.getElementById("newDriverAddress") as HTMLInputElement).value;
    
    // sanitize??
    
    // generate a driver 
    let id = this.driverIdNumber;

    // setup query string
    let queryString = `INSERT INTO ${this.database}Driver (DriverAddress, DriverID, driverName) VALUES ('${address}', '${id}', '${name}')`;
    //console.log(queryString);

    // call query method
    this.configService.driverInfoRoute(queryString).subscribe(data => {
        // INSERT returns undefined
        //console.log(data);
        //console.log("updated driver info");
    });

    // update local driver info
    this.getDrivers();
  }

  submitNewShift(){

    // get input values 
    let driverId = (document.getElementById("newShiftId") as HTMLInputElement).value;
    let shiftDate = (document.getElementById("newShiftshiftDate") as HTMLInputElement).value;
    let startTime = (document.getElementById("newShiftstartTime") as HTMLInputElement).value;
    let endTime = (document.getElementById("newShiftendTime") as HTMLInputElement).value;
    
    // TODO: sanitize??

    // get running shift id
    let id = this.shiftIdNumber;

    // setup query string
    let queryString = `INSERT INTO ${this.database}Shift (driverId, shiftDate, startTime, endTime) VALUES ('${driverId}', '${shiftDate}', '${startTime}', '${endTime}')`;
    //console.log(queryString);

    // call query method
    this.configService.currentShifts(queryString).subscribe(data => {
      // INSERT returns undefined
      //console.log(data);
      //console.log("updated shift info");
    });

    // update local shift info
    this.getCurrentShifts();
  }
  
  getLicensePlateOfDriver () {
    // fixed -ML

      let queryString = "SELECT Driver.driverID, licensePlate FROM `3309`.Driver JOIN `3309`.Vehicle ON Driver.driverID = Vehicle.driverID;"
      
      //gets the ids of the driver and their licence plate

      this.configService.getdriverlicenceplate(queryString).subscribe(data => {
        //console.log(data);
        this.drivervehicle = data;
        this.showLocationtableData = true;
      }); 
  }

  getLocationProductQuantities() {
    // TODO: fix?

    // setup string
    let queryString = "SELECT driverID, licensePlate, kmLeft FROM `3309`.Vehicle WHERE EXISTS (SELECT licensePlate FROM `3309`.Vehicle WHERE Vehicle.kmLeft > 70);"

    this.configService.locationproductconfig(queryString).subscribe(data => {
      //console.log(data);
      this.driverVehicles = data;
      this.showLocationtableData = true;
    });    
  }

  clickShowProudctPrice() {
    this.showPriceSearchResults = !this.showPriceSearchResults;
  }

  showProductsLessThanACertainPrice() {

    if(document.getElementById("price") as HTMLInputElement === null){
      return;
    }
    let price = (document.getElementById("price") as HTMLInputElement).value;

    let queryString = "SELECT productName, productISBN, productPrice FROM Product WHERE productPrice < "+price+" GROUP BY productName, productISBN, productPrice;"

    this.configService.maxPrice(queryString).subscribe(data => {
      //console.log(data);
      this.displayMaxPrice = data;
      //this.showLocationtableData = true;
    });    
  }

  
  // this.shiftIdNumber = data.length -1
  getCurrentShifts() {
    //console.log("getting shifts");
    this.configService.currentShifts("").subscribe(
      data => { 
        this.currentShifts = data;
        this.shiftIdNumber = Object.keys(data).length -1;
      },
      err => console.log(err))
  }

  checkLoggedIn() {
    let value = localStorage.getItem('loggedIn');
    if (value === 'true') {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
  }

  // returns true if the passed string contains only characters, numbers, spaces and underscores
  // boolean flase == allow spaces
  sanitize(input: string, isCourseCode: boolean): boolean {
    let expressionAllowSpaces = new RegExp('^[a-zA-Z0-9 _]{0,15}$'); 
    let expressionNoSpaces = new RegExp('^[a-zA-Z0-9]{0,15}$'); 
    let newExpression = new RegExp("[<\"\/>%\$&#@\[\\\^\$\.\|\?\*\+\(\)\{\}]");

    if(!isCourseCode){
      if(newExpression.test(input)){
        return false;
      }else{
        return true;
      }
    }else{
      if(expressionNoSpaces.test(input)){
        return true;
      }else{
        return false;
      }
    }
  };


  ngOnInit(){

    // get locaton / product table info
    this.driverVehicles = [];
    this.getLocationProductQuantities();

    // get shift data

    this.getCurrentShifts();

    this.displayMaxPrice = [];
    //this.showProductsLessThanACertainPrice();

    this.drivervehicle = [];
    this.getLicensePlateOfDriver()

    this.checkLoggedIn();

    // get the driver data
    this.drivertableData = [];
    this.getDrivers();
  }
}
