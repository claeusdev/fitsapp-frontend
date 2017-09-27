import { Injectable } from '@angular/core';
import { Init } from '../init-waypoints';

@Injectable()
export class WaypointService extends Init {
    constructor(){
        super();
        this.load();
    }

    getWaypoints(){
        var waypoints = JSON.parse(localStorage.getItem('waypoints'));
        return waypoints;
    }

    addWaypoint(newWaypoint){
        // Fetch already existing waypoints
        var waypoints = JSON.parse(localStorage.getItem('waypoints'));
        // Pushing to waypoints array
        waypoints.push(newWaypoint);
        // Setting localStorage Waypoints
        localStorage.setItem('waypoints', JSON.stringify(waypoints));
    }

    updateWaypoint(waypoint, newLat, newLng){
        var waypoints = JSON.parse(localStorage.getItem('waypoints'));
        for(var i = 0; i < waypoints.length; i++){
            if(waypoint.lat == waypoints[i].lat && waypoints.lng == waypoints[i].lng){
                waypoints[i].lat = newLat;
                waypoints[i].lng = newLng;
            }
        }  
        
        // Setting localStorage Waypoints
        localStorage.setItem('waypoints', JSON.stringify(waypoints));
    }

    removeWaypoint(waypoint){
        var waypoints = JSON.parse(localStorage.getItem('waypoints'));
        for(var i = 0; i < waypoints.length; i++){
            if(waypoint.lat == waypoints[i].lat && waypoints.lng == waypoints[i].lng){
                waypoints.splice(i, 1);
            }
        }  
        
        // Setting localStorage Waypoints
        localStorage.setItem('waypoints', JSON.stringify(waypoints));
    }
}