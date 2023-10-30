// fucntion to generate an array with participants keys
export const generateArray = (n) => Array.from({ length: n }, (_, i) => i + 1);

// Regular expression for alphabets and spaces
const nameRegex = /^[a-zA-Z ]*$/;

// Check for duplicate name
const isDuplicate = (name, key, details) =>
  Object.values(details).some(
    (item) => item.key !== key && item.name.toLowerCase() === name.toLowerCase()
  );

// fucntion to validate input
export function validateInput(name, key, details) {
  let error = "";
  if (name.trim().length === 0) {
    error = "Name is required.";
  } else if (name.length > 20) {
    error = "Name exceeds 20 characters limit.";
  } else if (!nameRegex.test(name)) {
    error = "No Numbers or Special Characters are allowed.";
  } else if (isDuplicate(name, key, details)) {
    error = "Duplicate name found. Please use a unique name.";
  }
  return error;
}
