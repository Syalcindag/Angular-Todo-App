import { Component } from '@angular/core';
import { ItemModel } from 'src/models/itemModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item: ItemModel = {itemName: '', completed:false}
  itemList: ItemModel[] = [];

  addItem(){
    this.itemList.push({completed: false, itemName: this.item.itemName})
  }

  clickItem(item: ItemModel){
    let itemIndex = this.itemList.indexOf(item);

    this.itemList[itemIndex].completed = true;
  }

  deleteItem(item: ItemModel){
    let itemIndex =this.itemList.indexOf(item);
    this.itemList.splice(itemIndex, 1);
  }
}
