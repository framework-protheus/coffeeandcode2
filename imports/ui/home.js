import './topic/listTopics.js'
import './topic/topicForm.js'
import './event/rankEvent.js'
import './home.html'
import './about.html'
import './menu.html'

Template.home.events({});
Template.home.helpers({
	getCode: function(){
		return "</Code>"
	}
});
