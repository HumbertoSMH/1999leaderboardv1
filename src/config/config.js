export const API_URL = '/community/leaderboard/GetPersonalStat?title=age2&profile_ids=';
export const PLAYERS_IDS = [17719190,19704289,19500861,2976140,4874120,18844570,2258251,2269036]; 
export const get_full_url = () => `${API_URL}[${PLAYERS_IDS}]`;
export const CONFIG_FETCH_GET = {
	method: 'GET', 
    headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }
};