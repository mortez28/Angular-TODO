import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "My Todo List";

  todoArray = [];

  //todoForm: new FormGroup()
  addTodo(value) {
    if (value !== "") {
      var newValue = {
        text: value,
        finish: false
      };
      this.todoArray.push(newValue);
    } else {
      alert("Please fill in the blank");
    }
  }
  /*delete item*/
  deleteItem(todo) {
    this.todoArray = this.todoArray.filter(a => a.text !== todo.text);
  }
}
