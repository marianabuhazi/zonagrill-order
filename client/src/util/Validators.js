const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_PHONENUMBER = 'EMAIL';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_MAXLENGTH = val => ({
  type: VALIDATOR_TYPE_MAXLENGTH,
  val: val
});
export const VALIDATOR_PHONENUMBER= () => ({ type: VALIDATOR_TYPE_PHONENUMBER });

export const validate = (value, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_PHONENUMBER) {
      isValid = isValid && /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value);
    }
  }
  return isValid;
};