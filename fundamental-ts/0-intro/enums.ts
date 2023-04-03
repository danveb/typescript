// Enum Type 
// Enums exist to allow a developer to define a set of named constants. 
// TypeScript provides numeric and string-based "enums"

// define enum with number
// enum SeatChoice {
//     // AISLE, // by default it's defined at 0 and subsequent are +1 
//             // but, if we want we can manually define a strict number and subsequents are +1 too
//     AISLE = 10, 
//     MIDDLE, 
//     WINDOW, 
// };

// define enum with string 
// enum SeatChoice {
//     AISLE = "aisle", // we can define a string-based enum value
//     MIDDLE = "middle",
//     WINDOW = "window", 
// }; 

// define enum with number and string 
enum SeatChoice {
    AISLE = "aisle", // string value 
    MIDDLE = 2, // number value 
    WINDOW, // 3, number value 
}

const dbSeat = SeatChoice.AISLE; // value of "aisle"
const spSeat = SeatChoice.WINDOW; // value of 3