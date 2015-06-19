import Ember from "ember";

var QuestionController = {
  needs: ['question'],
  isEditing: false,
  actions: {
    addAnswer: function() {
      var time = new Date().getTime();
      var inputDate = new Date(time);

      var newAnswer = this.store.createRecord('answer', {
        text: this.get('text'),
        answerAuthor: this.get('answerAuthor'),
        answerDate: inputDate.toString()
      });

      var question = this.get('controllers.question.model');
      newAnswer.save().then(function() {
        question.get('answers').pushObject(newAnswer);
        question.save();
      });

      this.setProperties({
        text: '',
        answerAuthor: ''
      });
    },
    edit: function() {
      this.set('isEditing', true);
    },
    saveEdit: function() {
      var question = this.get('model');
      question.save();
      this.set('isEditing', false);
    },
    delete: function() {
      if(confirm("For realsies?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('questions');
      }
    }
  }
}
export default Ember.Controller.extend(QuestionController);
