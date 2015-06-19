import Ember from "ember";

var AddQuestionController = {
  actions: {
    addQuestion: function() {
      var time = new Date().getTime();
      var inputDate = new Date(time);
      var newQuestion = this.store.createRecord('question', {
        author: this.get('author'),
        title: this.get('title'),
        body: this.get('body'),
        category: this.get('category'),
        questionDate: inputDate.toString()
      });
      newQuestion.save()




      this.setProperties({
        author: '',
        title: '',
        body: '',
        category: '',
      });
    }
  }
}
export default Ember.Controller.extend(AddQuestionController);
