function BinarySearch(arr, n) {
  let low = 0;
  let heigh = arr.length - 1;
  while (low <= heigh) {
    let mid = Mathfloor((low + heigh) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] <= arr[mid]) {
      if (arr[low] <= n && n <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }else{
        
    }
  }
}
