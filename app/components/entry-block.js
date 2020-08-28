import Component from '@ember/component';
import moment from 'moment';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'article',
  classNames: ['tile', 'is-child', 'box'],
  entry: null,
});
