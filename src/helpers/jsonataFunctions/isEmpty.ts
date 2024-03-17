import _ from 'lodash';

export const isEmpty = (value) => {
  if (value) {
    const type = typeof value;
    if (type) {
      if (type !== 'string') {
        if (type === 'object') {
          return _.isEmpty(value) ? true : (Object.keys(value).length === 0);
        } else {
          if (Array.isArray(value)) {
            return value.length === 0;
          }

          return type === 'number' ? false : (type !== 'boolean');
        }
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  return true;
};
