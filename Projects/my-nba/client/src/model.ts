class dataModule {
    async getData (team:string, year:string){
    try{
        // team = "lakers"
        // year = "2020"
    let result = await $.get(`http://localhost:8040/players?team=${team}&year=${year}`)
    return result
    }
    catch(error){
        return {"err":error}
    }
   }

   async getFilteredData (){
    let result = await $.get(`http://localhost:8040/players/isBirthday`)
    return result
}

async getStatsData (f_name:string,l_name:string){
    let result = await $.get(`http://localhost:8040/players/stats?l_name=${l_name}&f_name=${f_name}`)
    return result
   
}

addPlayerToDreamTeam(playerObj:any){
    $.post("http://localhost:8040/dreamTeam",playerObj)
}

removePlayerFromDreamTeam(playerObj:any){
    return $.ajax({
        url: `/dreamTeam`,
        method: "DELETE",
        data:playerObj
    })}

async getDreamTeam(){
    let result = await $.get(`http://localhost:8040/dreamTeam`)
    return result
}


}
