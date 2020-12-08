import { helper } from '@ember/component/helper';

export default helper(function eq(params/*, hash*/) {
  if (!params || !params[0] || !params[1]) return false;
  return params[0] == params[1];
});
