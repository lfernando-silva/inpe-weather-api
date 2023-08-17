import getAirportStatus from "./actions/getAirportStatus";

async function exect(){
    const res = await getAirportStatus('SBAA');

    console.log(res)
}

exect()