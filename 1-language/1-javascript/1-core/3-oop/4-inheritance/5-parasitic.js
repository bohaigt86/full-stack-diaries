function parasitic(origin) {
  const copy = Object.create(origin);
  copy.showOptions = function () {
    console.log('My options include: ' + this.models.join(', ') + '.');
  };
  return copy;
}

const subaru = parasitic({
  make: 'Subaru',
  models: ['WRX STI', 'Forester', 'Outback'],
});

subaru.showOptions();
