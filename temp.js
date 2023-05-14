

// Iterate through the object
for (const key in itemsToCount) {
  if (itemsToCount.hasOwnProperty(key)) {
    console.log(`${key}: ${itemsToCount[key]}`);
  }
}