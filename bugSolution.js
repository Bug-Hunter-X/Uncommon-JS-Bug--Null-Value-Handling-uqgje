function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  } else if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input types'; // Handle incorrect input types
  }
  return a + b; // Perform intended operation
}

console.log(foo(null,5)); // null
console.log(foo(5, null)); // null
console.log(foo(5, 5)); // 10
console.log(foo('a', 5)); // Invalid input types