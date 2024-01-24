console.log("Map Collection");

let myMap = new Map();
console.log("myMap",myMap);
myMap.set("1","Nikhil");
myMap.set(2,50);
myMap.set(true,"trainer");
console.log("myMap",myMap);

//to access values from map
console.log(myMap.get("1"));
console.log(myMap.get(true));
console.log(myMap.size);

let favPlaces = new Map([
    ["Jaipur","Palaces"],
    ["Pune","Fort"],
    ["Goa","Beaches"],
]);
console.log("favPlaces",favPlaces);

let mySet = new Set();
console.log("mySet",mySet);
mySet.add("Burger");
mySet.add("Pizza");
mySet.add("Sandwich");
mySet.add("Ghar ka Khana");
mySet.add("Pizza");
console.log("mySet",mySet);

let myFavCities = new Set(["Pune","Hyderabad","Bengalore","Mumbai","Nagpur"])
    console.log("myFavCities",myFavCities);

    for(let curritem of myFavCities){
      console.log(curritem);
    }




