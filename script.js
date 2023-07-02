// Selecting the elements by using IDs
    const input = document.getElementById('box');
    const list = document.getElementById('list');
// Making an add fucntion which is invoked either clicking on button or pressing enter.
    function addTask() {
      if (input.value === '') {
        alert("Please Enter some Task.");
      } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
      }
      input.value = '';
      save();
    }
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
// Tracking click on list items if we click on list item we can toggle checked status.
// if we click on the span which we add inside li tag then we should remove the li tag as we are trying to delete it. 
    list.addEventListener("click", function(e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        save();
      } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        save();
      }
    }, false);
// Using save function to save the current status of list elements in local storage this helps in not loosing of our tasks even if we refresh or close the window.
    function save() {
      localStorage.setItem("data", list.innerHTML);
    }
// Show task function is invoked every time we open the application or refresh the page.
    function showTask() {
      list.innerHTML = localStorage.getItem("data");
    }
    showTask();
  
