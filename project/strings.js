const str = "A man, a plan, a canal: Panama";
const str1 = "sams";

// Helper function to check if a character is alphanumeric
function isAlphanumeric(char) {
  return /[a-z0-9]/i.test(char);
}

function findPalindrome(sentence) {
  let i = 0;
  let j = sentence.length - 1;

  while (i < j) {
    while (i < j && !isAlphanumeric(sentence[i])) i++;
    while (i < j && !isAlphanumeric(sentence[j])) j--;
    if (sentence[i].toLowerCase() !== sentence[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

const isPalindrome = findPalindrome(str);
console.log(isPalindrome);

function isAnagrama(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const charCount = new Map();

  for (let char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!charCount.has(char)) return false;

    charCount.set(char, charCount.get(char) - 1);
    if (charCount.get(char) === 0) {
      charCount.delete(char);
    }
  }

  return charCount.size === 0;
}
const anagrama = isAnagrama("listen", "silent");
console.log(anagrama);

// Longest Common Prefix
const stringArray = ["flower", "flow", "flht"];
function findLongestCommonPrefix(stringArray) {
  const n = stringArray.length;
  let str = "";
  for (var i = 0; i < n; i++) {
    let ch = stringArray[0][i];
    let match = true;

    for (var j = 1; j < n; j++) {
      if (ch != stringArray[j][i]) {
        match = false;
        break;
      }
    }
    if (!match) break;
    str += ch;
  }
  return str;
}

let ans = findLongestCommonPrefix(stringArray);
console.log(ans);

// find no of uniq ele in a string
const str4 = "mam";
function findUniq(str) {
  let mp = new Map();
  for (let ele of str) {
    mp.set(ele, (mp.get(ele) || 0) + 1);
  }
  return mp.size;
}

const val2 = findUniq(str4);
console.log(val2); // 2

// find uniq char in string
const str3 = "mam";
function findUniq(str) {
  let mp = new Map();
  for (let ele of str) {
    mp.set(ele, (mp.get(ele) || 0) + 1);
  }

  for (let [key, value] of mp) {
    if (value === 1) return key;
  }
  return null;
}

const val1 = findUniq(str3);
console.log(val1); // a

// longest characters without repeating characters
const s = "mohmoaahih";
function lengthOfLongestSubstring(str) {
  const n = str.length;
  let maxChar = 0;
  let j = 0;

  for (let i = 0; i < n; i++) {
    if (str[i] === str[j]) {
      maxChar = Math.max(maxChar, j - i + 1);
      maxChar = 0;
      j = i;
    } else maxChar++;
  }
  return maxChar;
}

const longestSubstr = lengthOfLongestSubstring(s);
console.log(longestSubstr);
