import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  body: attr('string'),
  author: attr('string'),
  title: attr('string'),
  category: attr('string'),
  answers: DS.hasMany('answer', {async: true}),
  questionDate: attr('date')
});
