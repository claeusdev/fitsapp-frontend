export class Init{
    load(){
        if(localStorage.getItem('waypoints') === null || localStorage.getItem('waypoints') === undefined){

            var waypoints = [
                
            ];

            localStorage.setItem('waypoints', JSON.stringify(waypoints));
        } else {
            console.log("Loading Waypoints");
        }
    }
}