// Factorial
function factorial(n) {
    if (n < 0) {
        return null;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(0));

// Fibonacci
function fibonacci(n) {
    if (n < 0) {
        return null;
    }
    if (n === 0) {
        return 0;
    }
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return n === 1 ? 1 : curr;
}

console.log(fibonacci(6));
console.log(fibonacci(1));

// Bubble Sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));

// Binary Search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 9));

// Palindrome Check
function isPalindrome(str) {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('algorithm'));
