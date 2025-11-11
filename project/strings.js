const str = "A man, a plan, a canal: Panama";
const str1 = "sams";
function isAlphanumeric(char) {
  // The regex /^[a-z0-9]+$/i checks if the string:
  // ^ - starts with the following characters
  // [a-z0-9] - contains only lowercase letters (a-z) or digits (0-9)
  // + - one or more times
  // $ - ends with those characters
  // i - makes the check case-insensitive (handles A-Z as well)
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
    if (!charCount.has(char)) {
      return false;
    }
    charCount.set(char, charCount.get(char) - 1);
    if (charCount.get(char) === 0) {
      charCount.delete(char);
    }
  }

  return charCount.size === 0;
}
const anagrama = isAnagrama("listen", "silent");
console.log(anagrama);
