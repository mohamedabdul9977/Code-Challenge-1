//The function
function calculateBodaFare() {
//This prompts the user to enter the distance of their trip in kilometers.
    const input = prompt(`Unafika wapi Mkubwa? Kilometer ngapi?:`);
//I declared another variable distanceInKm which converts input from the user to a number incase they type out a string.    
    const distanceInKm = Number(input);
//These are the variables I used so that I can calculate the fare    
    const baseFare = 50;
    const chargePerKm = 15;
    const totalFare = baseFare + (distanceInKm * chargePerKm);
//I used this if statement incase the user put a distance that was not far
    if (distanceInKm <= 4) {
        console.log(`Uko si mbali hadi. Io ni ${distanceInKm} km:
            Ukikalia Pikipiki: KES ${baseFare}
            Mpaka Uko: KES ${distanceInKm * chargePerKm}
            Total: KES ${totalFare}
            
            Panda Pikipiki!`);
//I used this else statement incase the user put in a distance that was far            
    } else {
        console.log(`Uko kwote? Io ni ${distanceInKm} km:
            Ukikalia Pikipiki: KES ${baseFare}
            Mpaka Uko: KES ${distanceInKm * chargePerKm}
            Total: KES ${totalFare}
            
            Panda Pikipiki!`);
    }
//I return the distanceInKm    
    return distanceInKm;
}
//Finally I invoke the function
calculateBodaFare();