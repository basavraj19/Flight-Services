function addRowLock(flightId)
{
    return `select * from flights where id=${flightId} FOR UPDATE`;
}

module.exports ={
    addRowLock
}