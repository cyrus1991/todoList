
class Todo {

constructor () {
	this.elements = {
			input : document.getElementById("todo"),
			target : document.getElementById("target"),
			button : document.getElementById("btn"),
			template : document.getElementById("template")
			
		}
	this.resetEventListener()
}
resetEventListener () {
	this.elements.button.addEventListener("click", (e)=> {
		e.preventDefault()

		var template = this.elements.template;
		var template_clone = template.cloneNode(true);
		template_clone.removeAttribute("id");
		template_clone.classList.remove("d-none");
		template_clone.classList.add("d-flex");
		template_clone.querySelector(".title").innerHTML = this.elements.input.value;
		this.elements.target.appendChild(template_clone);
		var db =JSON.parse(localStorage.getItem("todoList")) || []
		console.log(db)
		db.push({title: this.elements.input.value});
		localStorage.setItem("todoList",JSON.stringify(db))		
	})
}

}

var indtaceOfCart = new Todo ();

