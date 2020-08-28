import { helper } from '@ember/component/helper';
import moment from 'moment';

export default helper(function humanDate(params/*, hash*/) {
  if (moment(params[0]).isValid()) {
    return moment(params[0]).format('MMMM Do YYYY, h:mm:ss a');
  }
  return params[0];
});
