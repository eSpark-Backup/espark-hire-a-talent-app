export const validation = (currentLength, PhoneLength) => {
  if (currentLength == PhoneLength) {
    return PhoneLength;
  } else {
    return false;
  }
};