export const validateName = (text) => {
  let reg = /^[a-z\u0590-\u05fe ]+$/i;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const validateEmail = (text) => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(text) === false) {
    return false;
  } else {
    return true;
  }
};

export const validatePassword = (text) => {
  if (text.length >= 2) {
    return true;
  } else {
    return false;
  }
};
