function calculateBodaFare() {
    const input = prompt(`Unafika wapi Mkubwa? Kilometer ngapi?:`);
    const distanceInKm = Number(input);
    const baseFare = 50;
    const chargePerKm = 15;
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    if (distanceInKm <= 4) {
        console.log(`Uko si mbali hadi. Io ni ${distanceInKm} km:
            Ukikalia Pikipiki: KES ${baseFare}
            Mpaka Uko: KES ${distanceInKm * chargePerKm}
            Total: KES ${totalFare}
            
            Panda Pikipiki!`);
    } else {
        console.log(`Uko kwote? Io ni ${distanceInKm} km:
            Ukikalia Pikipiki: KES ${baseFare}
            Mpaka Uko: KES ${distanceInKm * chargePerKm}
            Total: KES ${totalFare}
            
            Panda Pikipiki!`);
    }
    return distanceInKm;
}
calculateBodaFare();