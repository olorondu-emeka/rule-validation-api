/* eslint-disable no-plusplus */
/**
 *
 * @param {string} inputString required input string
 * @param {string} substring substring to be validated
 * @returns {boolean} returns true|false
 */
module.exports = function validSubstring(inputString, substring) {
  // edge cases
  if (!substring.length) return true;
  if (substring.length > inputString) return false;
  if (substring.length === inputString.length) {
    if (substring === inputString) return true;
  }

  // others
  let left = 0,
    right = substring.length - 1;
  const windowLength = substring.length;
  while (right <= inputString.length - 1) {
    const currentSubstring = inputString.substr(left, windowLength);

    if (currentSubstring === substring) return true;
    left++;
    right++;
  }

  return false;
};
