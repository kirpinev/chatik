import { expect } from 'chai';

import { EventBus } from '../src/modules/models';

describe('Event Bus', () => {
  const eventBus = new EventBus();

  const testArr: number[] = [];

  const testFunc = arg => {
    testArr.push(arg);
  };

  it('корректно создает экземпляр класса', () => {
    expect(eventBus).to.be.an('object');
  });

  it('содержит все необходимые свойства', () => {
    expect(eventBus).to.have.property('listeners');
  });

  it('содержит все необходимые методы', () => {
    expect(eventBus).to.have.property('on');

    expect(eventBus).to.have.property('off');

    expect(eventBus).to.have.property('emit');
  });

  it('корректно добавляет ивент', () => {
    eventBus.on('test', testFunc);

    expect(eventBus.listeners).to.have.property('test');

    expect(eventBus.listeners['test'].find(func => func === testFunc)).to.equal(
      testFunc,
    );
  });

  it('корректно удаляет ивент', () => {
    eventBus.off('test', testFunc);

    expect(eventBus.listeners).to.have.property('test');

    expect(eventBus.listeners['test'].some(testFunc)).to.equal(false);
  });

  it('корректно запускает ивент', () => {
    eventBus.on('test', testFunc);

    eventBus.emit('test', 2);

    const num = testArr[testArr.length - 1];

    expect(num).to.equal(2);
  });
});
