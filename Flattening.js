const nestedArray = [1, [2, 3], 4];
const flattenedArray = nestedArray.flat(); // [1, 2, 3, 4]

const deeplyNestedArray = [1, [2, [3, 4]], 5];
const flattenedToOneDepth = deeplyNestedArray.flat(1); // [1, 2, [3, 4], 5]
const flattenedToTwoDepths = deeplyNestedArray.flat(2); // [1, 2, 3, 4, 5]
const veryDeeplyNestedArray = [1, [2, [3, [4, 5]]], 6];
const fullyFlattenedArray = veryDeeplyNestedArray.flat(Infinity); // [1, 2, 3, 4, 5, 6]