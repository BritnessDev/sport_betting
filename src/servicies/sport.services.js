import axios from "axios"

export const getSportData = async (page, apiName, id, type, secondid) => {

    var url = ''
    
    if( type && apiName && id && !secondid){
        url = "https://sportscore1.p.rapidapi.com/" + apiName + '/' + id + '/' + type;
    }else if(!id){
        
        url = "https://sportscore1.p.rapidapi.com/" + apiName;
    }
    else if(!type)
    {    
        url = "https://sportscore1.p.rapidapi.com/" + apiName + '/' + id;
    }else if(secondid){
        
        url = "https://sportscore1.p.rapidapi.com/" + apiName + '/' + id + '/' + type + '/' + secondid;
    }

    const options = {
        method: 'GET',
        url: url,
        params: {page: page},
        headers: {
            'X-RapidAPI-Key': '9438157acbmshcdc8de162365ba4p1b56c0jsn4668567dfaea',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    }

    try {
        const response = await axios.request(options);
        return (response.data);
    } catch (error) {
        console.error(error);
    }
}

export const postSportData = async(page, apiName, params) => {

    var url = 'https://sportscore1.p.rapidapi.com/' + apiName;

    const options = {
        method: 'POST',
        url: url,
        params: {
            page: page,
            ...params
        },
        headers: {
            'X-RapidAPI-Key': '9438157acbmshcdc8de162365ba4p1b56c0jsn4668567dfaea',
            'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
        }
    }

    console.log(options)
    // debugger
    try {
        const response = await axios.request(options);
        return (response.data);
    } catch (error) {
        console.error(error);
    }
}