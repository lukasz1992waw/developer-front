import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/common/house';
import { HouseServiceService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {

  houses: House[];

  constructor(private houseService: HouseServiceService){}


  ngOnInit() {
    this.listHouses();
  }

  listHouses() {
    this.houseService.getHouseList().subscribe(
      data => {
        this.houses = data;
      }
    )
  }
}
