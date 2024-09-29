// Code your solution in this file!
function distanceFromHqInBlocks(street){
   let answer;
    if (street>=42){
        answer = (street - 42)
        
    } else {
        answer = (42 - street)
        
    }
    console.log(answer)
    return answer;
}

function distanceFromHqInFeet(dist){
    let distance;
     if (dist>=42){
        distance = (dist - 42) * 264
        
    } else {
        distance = (42 - dist) * 264
        
    }
    console.log(distance)
    return distance;     
}


function distanceTravelledInFeet(start, destination){
    let travel;
    if (destination >= start){
        travel = (destination - start)* 264
    } else {
        travel = (start - destination) * 264
    }
    console.log(travel)
    return travel;
}

function calculatesFarePrice(departed, arrived){
    let fare;
    let moved;
    if (arrived >= departed){
        moved = (arrived - departed)* 264
    } else {
        moved = (departed - arrived) * 264
    }
    if (moved <= 400){
        fare = 0
    } else if (moved <= 2000){
        fare = (moved - 400) * 0.02
    } else if (moved > 2000 &&  moved <=2500){
        fare = 25
    } else if (moved > 2500){
        fare = 'cannot travel that far'
    }
    console.log(fare)
    return fare;

}