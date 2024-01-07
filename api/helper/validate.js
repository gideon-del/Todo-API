/*
{
    name,
    type,
    
}
*/

function validate(...args) {
  const errors = [];
  for (let i = 0; i <= args.length - 1; i++) {
    const value = args[i];
    if (!value.value) {
      errors.push({ [value.name]: `${value.name} is required` });
      continue;
    }
    if (value.type === "number" && isNaN(value.value)) {
      errors.push({ [value.name]: `Receiving NaN instead of ${value.type}` });
      continue;
    } else if (value.type && typeof value.value !== value.type) {
      errors.push({
        [value.name]: `Receiving ${typeof value.value} instead of ${
          value.type
        }`,
      });
      continue;
    }
  }
  return errors.length > 0 ? { isError: true, errors } : { isError: false };
}

module.exports = validate;
