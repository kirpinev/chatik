import { expect } from 'chai';

import { Templator } from '../src/modules/models';

import { ava as avatarTempl } from '../src/templates/ava.jumbo';
import { avaData } from '../src/modules/constants';

describe('Шаблонизатор', () => {
  const templator = new Templator(avatarTempl);

  it('корректно создает экземпляр класса', () => {
    expect(templator).to.be.an('object');
  });

  it('содержит все необходимые свойства', () => {
    expect(templator).to.have.property('template');

    expect(templator).to.have.property('TEMPLATE_REGEXP');
  });

  it('содержит все необходимые методы', () => {
    expect(templator).to.have.property('compile');

    expect(templator).to.have.property('get');

    expect(templator).to.have.property('compileTemplate');
  });

  it('содержит шаблонную строку в свойстве _template', () => {
    expect(templator.template).to.be.a('string');
  });

  it('возвращает новую шаблонную строку после compile(context)', () => {
    expect(templator.compile(avaData)).to.be.a('string');
  });
});
