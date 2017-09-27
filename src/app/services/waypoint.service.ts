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
}