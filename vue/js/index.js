//input
title = new Vue({
    el: '.title',
    data: {message: 'Belajar Vue js'}
})

myObject1 = new Vue({
    el: '#app1',
    data: {message: 'Hello Vue.js!'}
})

//click function
var myObject2 = new Vue({
    el: '#app2',
    data: {message: 'Click Function'}
})

function myFunction() {
    myObject2.message = "John Doe";
}

//listing
myObject1 = new Vue({
    el: '#app3',
    data: {message: 'Listing'}
})
myObject = new Vue({
    el: '#list',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue.js' },
        { text: 'Build Something Awesome' }
      ]
    }
})

//CRUD SQL
var app = new Vue({
    el: '#crud',
    data: {
      users: "",
      userid: 0,
      username: "",
      name: "",
      email: "",
      p_username: "User Name",
      p_name: "Name",
      p_mail: "Email",
    },
    methods: {
     allRecords: function(){
       axios.post('ajaxfile.php', {
         request: 1
       })
       .then(function (response) {
         app.users = response.data;
       })
       .catch(function (error) {
         console.log(error);
       });
   
     },
     addRecord: function(){
  
       if(this.username != '' && this.name != '' && this.email != ''){
         axios.post('ajaxfile.php', {
           request: 2,
           username: this.username,
           name: this.name,
           email: this.email
         })
         .then(function (response) {
  
           // Fetch records
           app.allRecords();
  
           // Empty values
           app.username = '';
           app.name = '';
           app.email = '';
   
           alert(response.data);
         })
         .catch(function (error) {
           console.log(error);
         });
       }else{
         alert('Fill all fields.');
       }
   
     },
     updateRecord: function(index,id){
  
       // Read value from Textbox
       var name = this.users[index].name;
       var email = this.users[index].email;
  
       if(name !='' && email !=''){
         axios.post('ajaxfile.php', {
           request: 3,
           id: id,
           name: name,
           email: email
         })
         .then(function (response) {
           alert(response.data);
         })
         .catch(function (error) {
           console.log(error);
         });
       }
     },
     deleteRecord: function(index,id){
   
       axios.post('ajaxfile.php', {
         request: 4,
         id: id
       })
       .then(function (response) {
  
         // Remove index from users
         app.users.splice(index, 1);
         alert(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });
   
      } 
    },
    created: function(){
      this.allRecords();
    }
})