
import { useState, useEffect } from 'react';
import { get_full_url, CONFIG_FETCH_GET } from '../config/config';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(get_full_url(), CONFIG_FETCH_GET)
            .then(resp => resp.json())
            .then(data => {
                setResponse(process_response(data))
            });
        setLoading(false);
        setError(null);
    }, [get_full_url()]);

    return {
        loading,
        response,
        error
    };
};

const process_response = (response) => {
    let users = [];
    response["statGroups"].forEach(user => {

        let user_elo = get_elo_info(response["leaderboardStats"], user.members[0].personal_statgroup_id);

        users.push({
            "nick": user.members[0].alias ?? "",
            "elo": user_elo[0].rating ?? 0,
            "max_elo": user_elo[0].highestrating ?? 0,
            "country": user.members[0].country ?? ""
        })
    });

    users = users.sort(function(a,b){ 
        var x = a.elo > b.elo? -1:1; 
        return x; 
    });

    users.forEach((element, i) => {
        element.rank = i+1;
    });
    return users;
}

const get_elo_info = (leaderboardStats, personal_statgroup_id) => {
    var elo_info = leaderboardStats.filter(element => (element.statgroup_id === personal_statgroup_id && element.leaderboard_id === 3));
    if (elo_info.length === 0)
        return [{ "rating": 0, "highestrating": 0 }]
    else
        return elo_info;
}
