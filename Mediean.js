function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = mergeSortedArrays(nums1, nums2);
    const length = mergedArray.length;
    if (length % 2 === 0) {
  
      const middle1 = mergedArray[length / 2 - 1];
      const middle2 = mergedArray[length / 2];
      return (middle1 + middle2) / 2;
    } else {
  
      return mergedArray[Math.floor(length / 2)];
    }
  }
  
  function mergeSortedArrays(nums1, nums2) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while (i < nums1.length && j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        result.push(nums1[i]);
        i++;
      } else {
        result.push(nums2[j]);
        j++;
      }
    }
  
    while (i < nums1.length) {
      result.push(nums1[i]);
      i++;
    }
    while (j < nums2.length) {
      result.push(nums2[j]);
      j++;
    }
  
    return result;
  }
  
  const nums1 = [1, 3, 8];
  const nums2 = [2, 5, 7];
  
  const median = findMedianSortedArrays(nums1, nums2);
  console.log("Median:", median);
  