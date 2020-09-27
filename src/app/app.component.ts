import { Component } from '@angular/core';
import { Pizza } from '../app/pizza.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   // Creating list of PizzaOrdard type.
   ordardList: Pizza[] = [
    new Pizza('Ravi', 2, 200, 'Normal Pizza', 100, 'P-234, Hyderabad', 'Received'),
    new Pizza('Vinod', 3, 450, 'Onion Pizza', 150, 'A-234, Indore', 'Received'),
    new Pizza('Sunita', 1, 200, 'Chicken Pizza', 200, 'SS-234, Bangalore', 'Received'),
    new Pizza('Priya', 4, 800, 'Chicken Tikka Pizza', 200, 'Tavrekare-56001, Bangalore', 'Received')
  ]

  showModal: boolean;
  content: string;
  title: string;
  selectedDetaild = []
  //Bootstrap Modal Open event
  show(ordar) {
    this.showModal = true; 
    //passing selected row data
    this.selectedDetaild = ordar 
    this.title = "Order details";    

  }
  //Bootstrap Modal Close event
  hide() {
    this.showModal = false;
  }
  //changing the status inprogress
  updatestatus(event, ordar) {
    event.stopPropagation();
    ordar.status = "Inporgress"
  }
  //changing the status Ready to delever
  readytodelever(event, ordar) {
    event.stopPropagation();
    ordar.status = "Ready To Delever"
  }
}
