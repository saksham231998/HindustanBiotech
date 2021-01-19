function changeMessage(message){
    document.getElementById("mess").textContent = message;
}



let secret  =  Symbol();


let person = {
  name:'saksham',
  
  job :'software engineer',

  [secret] : 'secret information',

  showInfo :  function(){
      changeMessage(this.name +  ' is employes as ' + this.job )
  }
}

console.log(person.name);
person['name'] = 'sunil';

console.log(person.secret)

person.showInfo();

