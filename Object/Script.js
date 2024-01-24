 console.log("Objects");

 let myDetails = {
    fname : "Nikhil",
    lname: "Pachbhai",
    age : 75,
    skills : ['Admin','Apex','LWC','JS']
 };

 console.log("myDetails",myDetails);
 console.log("typeof myDetails",typeof myDetails);

 //Json.stringfy : object into string

 let jsonString = JSON.stringify(myDetails);
 console.log("jsonString",jsonString);
 console.log("typeof jsonString", typeof jsonString);

 //JSON parse : String into object

 let jsonObject = JSON.parse(jsonString);
 console.log("jsonObject",jsonObject);
 console.log("typeof jsonObject", typeof jsonObject);

 // Modify object -->  1) "."   2) []

  myDetails.dob = "1950";
  console.log("myDetails",myDetails);

  myDetails.age = 2023 - 1950;
  console.log("myDetails",myDetails);

// [] --> whenever we have to populate property dynamically
  mycountry = "Country";
  myDetails[mycountry] = "India";
  console.log("myDetails",myDetails);

  myDetails["City Name"] = "Pune";
  console.log("myDetails",myDetails);

  //Access the value from object m "." and []

let myCountry = myDetails.Country;
console.log("myCountry",myCountry);

  let myCity = myDetails["City Name"];
  console.log("myCity",myCity);








