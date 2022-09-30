class dataModule {
    async getData (team:string, year:string){
        team = "lakers"
        year = "2020"
    let result = await $.get(`http://localhost:8000/players?team=${team}&year=${year}`)
    return result
   }

   async getFilteredData (){
    let result = await $.get(`http://localhost:8000//players/isBirthday`)
    return result
}

   
}
