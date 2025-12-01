import { Component } from '@angular/core';
import { Ride } from '../../interfaces/ride';
import { RideService } from '../../services/ride/ride.service';
import { MessageService } from '../../services/message/message.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-rides',
  standalone: false,
  templateUrl: './rides.component.html',
  styleUrl: './rides.component.css'
})
export class RidesComponent implements OnInit{

  clicked = false;
  rides: Ride[] = [];
  
  selectedRide?: Ride;
  
  constructor(private rideService: RideService){}
  
  ngOnInit(): void {
    this.getRides();
  }
  
  getRides(): void {
    this.rideService.getAllRides().subscribe(rides => this.rides = rides);
  }
}
