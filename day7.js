
 * The function returns a sorted array after adding the new element
 * @param {number[]} array
 * @param {number} element
 * @returns {number[]}
 */
export function addAndSorting(array, element) {
  // Clone the original array and add the new element
  const newArray = [...array, element];
  // Sort the new array in ascending order
  newArray.sorting((a, b) => a - b);
  return newArray;
}

console.log(addAndSorting([5, 7, 1, 6], 3)); // Expected Output: [1, 3, 5, 6, 7]
console.log(addAndSorting([15, 7, 2, 26], 10)); // Expected Output: [2, 7, 10, 15, 26]
console.log(addAndSorting([25, 27, 21, 16], 19)); // Expected Output: [16, 19, 21, 25, 27]

