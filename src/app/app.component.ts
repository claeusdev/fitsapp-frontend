import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FittsApp';
  // Setting zoom level
  zoom: number = 5;

  // Starting point in the middle of Norway
  lat: number = 59.911491;
  lng: number = 10.757933;

  // Setting Variables for waypoint addition
  waypointName:string;
  waypointLat:string;
  waypointLng:string;
  waypointDraggable:string;

  // Drivers
  drivers: [
    {
      name: 'Jason Aldean',
      VehicleType: 'Lamboghini',
      Age: '32'
    },
    {
      name: 'Jake Brown',
      VehicleType: 'Nissan',
      Age: '18'
    }
  ]

  // Setting Markers
  waypoints: waypoint[] = [
    {
      name: "Company One",
      lat: 59.911491,
      lng: 10.757933,
      draggable: true
    }
  ];
  constructor(){

  }

  clickedWaypoint(waypoint:waypoint,index:number){
    console.log("Clicked marker: "+waypoint.name+" at index " +index)
  }

  mapClicked($event:any){
    var newWaypoint = {
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable:false
    }

    this.waypoints.push(newWaypoint);
  }

  waypointDragEnd(waypoint:any, $event:any){
    var updatedWaypoint = {
      name: waypoint.name,
      lat: parseFloat(waypoint.lat),
      lng: parseFloat(waypoint.lng),
      draggable: false
    }

    var newLat = $event.coords.lat;
    var newLng = $event.coords.lng;
  }

  addWaypoint() {
    if(this.waypointDraggable == 'yes'){
      var isDraggable = true;
    }else {
      var isDraggable = false;
    }

    var newWaypoint = {
      name: this.waypointName,
      lat: parseFloat(this.waypointLat),
      lng: parseFloat(this.waypointLng),
      draggable: isDraggable
    }

    this.waypoints.push(newWaypoint);
  }
}

// Setting Marker types
interface waypoint {
  name: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
