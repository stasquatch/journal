import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | eq', function(hooks) {
  setupRenderingTest(hooks);

  test('it equals true', async function(assert) {
    this.set('firstValue', '1234');
    this.set('secondValue', '1234');

    await render(hbs`{{eq firstValue secondValue}}`);

    assert.equal(this.element.textContent.trim(), 'true');
  });

  test('it equals false', async function(assert) {
    this.set('firstValue', '1234');
    this.set('secondValue', '12345');

    await render(hbs`{{eq firstValue secondValue}}`);

    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it equals false with missing values', async function(assert) {
    await render(hbs`{{eq}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });

  test('it renders false with one value', async function(assert) {
    this.set('firstValue', '1234');
    await render(hbs`{{eq firstValue}}`);
    assert.equal(this.element.textContent.trim(), 'false');
  });
});
