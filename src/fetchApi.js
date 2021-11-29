const fetches = {
    async fetchLink(url){
        const info = await fetch(url);
        const res = await info.json()
        return res
    },

    async fetchChampions(){
        let champList = []
        const { data } = await this.fetchLink('http://ddragon.leagueoflegends.com/cdn/11.23.1/data/pt_BR/champion.json');
        for(let [key, value] of Object.entries(data)){
            champList.push({
                name: value.name,
                id: value.id,
                key: value.key,
                title: value.title
            })
        }
    
        return champList
    },

    async fetchChampionInfo(champion){
        let championInfo = []
        const { data } = await this.fetchLink(`http://ddragon.leagueoflegends.com/cdn/11.23.1/data/pt_BR/champion/${champion}.json`);
        for(let [key, value] of Object.entries(data)){
            championInfo.push({
                name: value.name,
                id: value.id,
                key: value.key,
                title: value.title,
                skins: value.skins,
                lore: value.lore,
                skills: value.spells,
                passive: value.passive,
            })
        }
        return championInfo;
    }

}

export default fetches