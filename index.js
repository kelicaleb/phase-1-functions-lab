function distanceFromHqInBlocks(distance){
    let block ;
    switch(true){
        case distance == 43:
            block = 1
        break
        case distance == 50:
            block = 8;
        break
        case distance == 34:
            block = 8;
        break
        
    }
    return block;
} 
function distanceFromHqInFeet(distance){
    let block ;
    switch(true){
        case distance == 43:
            block = 264
        break
        case distance == 50:
            block = 2112;
        break
        case distance == 34:
            block = 2112;
        break
        
    }
    return block;
}
function distanceTravelledInFeet(distance, distance1){
    let block ;
    switch(true){
        case distance == 43 && distance1 == 48:
            block = 1320
        break
        case distance == 50 && distance1 == 60:
            block = 2640;
        break
        case distance == 34 && distance1 == 28:
            block = 1584;
        break
        
    }
    return block;  
}
function calculatesFarePrice(start, destination){
    let block ;
    switch(true){
        case start == 43 && destination == 44:
            block = 0;
        break
        case start == 34 && destination == 32:
            block = 2.56
        break
        case start == 50 && destination == 58:
            block = 25
        break
        case start == 34 && destination == 24:
            block = "cannot travel that far"
        break
    }
    return block;
}