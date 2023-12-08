export const validation = (currentLength, PhoneLength) => {
  if (currentLength == PhoneLength) {
    // console.log(PhoneLength, 'if');
    return PhoneLength;
  } else {
    // console.log(false, 'else');
    return false;
  }
};
