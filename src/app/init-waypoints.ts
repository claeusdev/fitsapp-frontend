export class Init{
    load(){
        if(localStorage.getItem('waypoints') === null || localStorage.getItem('waypoints') === undefined){

            var waypoints = [
                {
                    name: "Company One",
                    lat: 59.911491,
                    lng: 10.757933,
                    draggable: true
                }
            ];

            localStorage.setItem('waypoints', JSON.stringify(waypoints));
        } else {
            console.log("Loading Waypoints");
        }
    }
}