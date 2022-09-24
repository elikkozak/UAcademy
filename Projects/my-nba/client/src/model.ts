class dataModule {
    playersData = []
    async getData (team:string, year:string){
    let result = await $.get(`http://localhost:8000/players?team=${team}&year=${year}`)
    return result
   }
}
