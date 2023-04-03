/* Types in TypeScript 
- number, string, boolean 
- null, undefined, void
- object, array, tuples, etc. 
- any -> intentionally makes type to be anything so that TS doesn't complain 
- never
- unknown

1. Primitive Data Types 

a) string
- representing string values 
- "Hello World"

b) number
- representing numbers, ints, or floats just use "number" type 
- 5, 10, 10.99, 33.11111

c) boolean 
- representing "true" and "false" 

2. Other Data Types 

a) any 
- "any" is not a type, just a special marker to convince TS that we don't want to check a piece of code
- usually, we want to avoid "any"

*/

// Type Inference 
// TypeScript can automatically detect type information, without requiring explicit type annotation
// It is NOT best practice to annotate types to every single thing in TS 