//localstorage 
function ready () {
   for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);

   let action = document.createElement ('div');
   action.className=`${localStorage.getItem(key)}`;
   action.innerHTML=`${key}` ;
   //alert(`${key}: ${localStorage.getItem(key)}`);
   let content = document.querySelector ('.maincontent')
   content.append (action);
 }
}
 //document.addEventListener("DOMContentLoaded", ready);
setTimeout (ready, 500)





let inputfield = document.forms[0];
let field = inputfield.elements.todo;
//console.log (field.value);

//inputfield.onsubmit(function(e) {e.preventDefault()});

//добавляем
inputfield.onsubmit = function (e){
   e.preventDefault();
   let action = document.createElement ('div');
   action.className='actions';
   action.innerHTML=`${field.value} <img src ='delete.png' class='cross'> <img src ='pencil.png' class='rename'>` ;
   let content = document.querySelector ('.maincontent')
   content.append (action);
   fieldvalue=field.value
   console.log (`User entered next action: ${fieldvalue}`)
   field.value=null;
   //localStorage.setItem(action.innerHTML, action.className)
}
document.body.onclick = function () {
   let target = event.target;
   if (target.className == 'actions') {
      target.className = 'done';
      //alert (target.firstChild.data)
      //localStorage.setItem (target.innerHTML, 'done');
   }
   else if (target.className == 'done') {
      target.className = 'actions';
      //localStorage.setItem (target.innerHTML, 'actions');
   }
   



   /*let cross = document.querySelector ('.cross')
   cross.onclick = function () {
   let closestdiv = cross.closest ('div');
   closestdiv.remove ();
   } */


//удаляем
   let cross = document.querySelectorAll ('.cross');
   cross.forEach(function (item) {
      item.onclick = function () {
         let closestdiv = item.closest ('div');
         closestdiv.remove ();
         localStorage.removeItem(closestdiv.innerHTML)
      }
   })
//все по rename
   let rename = document.querySelectorAll ('.rename');
   rename.forEach(function (item) {
      item.onclick = function () {
         let backmodal = document.querySelector ('.renameOff');
         backmodal.className = 'renameOn';

         let renameform = document.querySelector ('.renameformOff');
         renameform.className = ('renameformOn');

         let renameinput = document.querySelector ('.renameinputOff');
         renameinput.className = ('renameinputOn');
         renameinput.value = item.closest('div').innerText;

         let renamebutton = document.querySelector ('.renamebuttonOff');
         renamebutton.className = ('renamebuttonOn');

         let renamecancelbutton = document.querySelector ('.renamecancelbuttonOff');
         renamecancelbutton.className = ('renamecancelbuttonOn');
         renamecancelbutton.onclick = function (e) {
            e.preventDefault();
            backmodal.className = 'renameOff';
            renameform.className = ('renameformOff');
            renameinput.className = ('renameinputOff');
            renamebutton.className = ('renamebuttonOff');
            renamecancelbutton.className = ('renamecancelbuttonOff');
         }

         renamebutton.onclick = function (e) {
            e.preventDefault();
            localStorage.removeItem (item.closest('div').innerHTML);
            item.closest('div').innerHTML = renameinput.value + "<img src ='delete.png' class='cross'> <img src ='pencil.png' class='rename'>";
            backmodal.className = 'renameOff';
            renameform.className = ('renameformOff');
            renameinput.className = ('renameinputOff');
            renamebutton.className = ('renamebuttonOff');
            renamecancelbutton.className = ('renamecancelbuttonOff');
            e.preventDefault();
         }
         backmodal.onclick = function () {
            backmodal.className = 'renameOff';
            renameform.className = ('renameformOff');
            renameinput.className = ('renameinputOff');
            renamebutton.className = ('renamebuttonOff');
            renamecancelbutton.className = ('renamecancelbuttonOff');
         }
      }

   })



  
  






}


//добавляем нижнее поле
function setsettingsOn () {
   let settings = document.querySelector ('.settingsOff');
   if (((document.querySelector ('.done')) || (document.querySelector ('.actions'))) && (document.querySelector ('.settingsOff'))) {
      settings.className = 'settingsOn';
   }
   else if (!((document.querySelector ('.done')) || (document.querySelector ('.actions'))) && (document.querySelector ('.settingsOn'))) {
      document.querySelector ('.settingsOn').className = 'settingsOff';
   }
}
setInterval  (setsettingsOn, 200)

//обновляем счетчик todo
function itemsleftrefresh () {
   if (document.querySelector ('.settingsOn')) {
      let itemsleft = document.querySelector ('.itemsleft');
      let undone = document.querySelectorAll ('.actions');
      itemsleft.innerText = `${undone.length} items left`; 
      if (undone.length == 1) {
         itemsleft.innerText = `${undone.length} item left`; 
      }
   }
}
setInterval  (itemsleftrefresh, 200)





 //settings functionality
 let displayall = document.querySelector ('.allOn')
 let displayactive = document.querySelector ('.activeOff')
 let displaycompleted = document.querySelector ('.completedOff')
 
 displayactive.onclick = function () {
    let alldone = document.querySelectorAll ('.done')
    alldone.forEach(function(item) {
       item.style.display = 'none'
    })
    let allundone = document.querySelectorAll ('.actions')
    allundone.forEach(function(item) {
       item.style.display = 'block'
    })
    displayall.className = 'allOff'
    displayactive.className = 'activeOn'
    displaycompleted.className = 'completedOff'
 }

 displaycompleted.onclick = function () {
    let allundone = document.querySelectorAll ('.actions');
    allundone.forEach(function(item) {
       item.style.display = 'none'
    })
    let alldone = document.querySelectorAll ('.done')
    alldone.forEach(function(item) {
       item.style.display = 'block'
    })
    displayall.className = 'allOff'
    displayactive.className = 'activeOff'
    displaycompleted.className = 'completedOn'
 }


 displayall.onclick = function () {
   let allundone = document.querySelectorAll ('.actions');
   allundone.forEach(function(item) {
      item.style.display = 'block'
   })
   let alldone = document.querySelectorAll ('.done')
   alldone.forEach(function(item) {
      item.style.display = 'block'
   })
   displayall.className = 'allOn'
   displayactive.className = 'activeOff'
   displaycompleted.className = 'completedOff'
}



//костыли для settings

function activecheck () {
   if (document.querySelector('.activeOn')) {
      let alldone = document.querySelectorAll ('.done')
      alldone.forEach(function(item) {
         item.style.display = 'none'
      })
   }
   else {
      return false
   }
  // Array.observe(alldone, removedone (alldone))
}
setInterval (activecheck, 200)

function completedcheck () {
   if (document.querySelector('.completedOn')) {
      let allundone = document.querySelectorAll ('.actions')
      allundone.forEach(function(item) {
         item.style.display = 'none'
      })
   }
   else {
      return false
   }
}
setInterval (completedcheck, 200)

//task management
let completeall = document.querySelector('.completeall');
completeall.onclick = function () {
   let allundone = document.querySelectorAll ('.actions')
    allundone.forEach(function(item) {
       item.className = 'done';
    })
}

let clearcompleted = document.querySelector ('.clearcompleted');
clearcompleted.onclick = function () {
   let alldone = document.querySelectorAll ('.done')
    alldone.forEach(function(item) {
       item.remove ();
       localStorage.removeItem(item.innerHTML)
    })
}


window.addEventListener("unload", function() {
   let done = document.querySelectorAll ('.done');
   done.forEach(function (item) {
      localStorage.setItem (item.innerHTML, 'done');
   })

   let undone = document.querySelectorAll ('.actions');
   undone.forEach(function (item) {
      localStorage.setItem (item.innerHTML, 'actions');
   })
})