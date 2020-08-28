import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function humanDate(params/*, hash*/) {
  if (moment(params[0]).isValid()) {
    return moment(params[0]).fromNow();
  }
  return params[0];
});
