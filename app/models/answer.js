import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  text: attr('string'),
  answerAuthor: attr('string'),
  question: DS.belongsTo('question', {async: true}),
  answerDate: attr('date')
});
