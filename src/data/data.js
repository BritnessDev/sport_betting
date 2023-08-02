export const headers = [
    {name: 'Football', routeName: 'football' },
    {name: 'Tennis', routeName: 'tennis' },
    {name: 'Basketball', routeName: 'basketball' },
    {name: 'Ice Hockey', routeName: 'hockey' },
    {name: 'Volleyball', routeName: 'volleyball' },
    {name: 'Handball', routeName: 'handball' },
]

export const apiConfig = {
    //sports
    "teams-by-sportid" : {
        name:"sports", type:"teams", description:"Teams by sport ID"
    },
    "events-by-sportid-date" : {
        name:"sports", type:"events/date", description:"Events by sport ID and date", fields:['sport_id', 'date']
    },
    "managers-by-sportid" : {
        name:"sports", type:"managers", description:"Managers by sport ID"
    },
    "sport-data" : {
        name:"sports", type:"", description:"Sport data"
    },
    "sport-list" : {
        name:"sports", type:"", description:"Sport list"
    },
    "sections-by-sportid" : {
        name:"sports", type:"sections", description:"Sections by sport ID"
    },
    "leagues-by-sportid" : {
        name:"sports", type:"leagues", description:"Leagues by sport ID"
    },
    "challenges-by-sportid" : {
        name:"sports", type:"challenges", description:"Challenges by sport ID"
    },
    "players-by-sportid" : {
        name:"sports", type:"players", description:"Players by sport ID"
    },
    "events-live-by-sportid" : {
        name:"sports", type:"events/live", description:"Events live by sport ID"
    },
    "events-by-sportid" : {
        name:"sports", type:"events", description:"Events by sport ID"
    },
    "seasons-by-sportid" : {
        name:"sports", type:"seasons", description:"Seasons by sport ID"
    },

    //sections
    "events-by-sectionid" : {
        name:"sections", type:"events", description:"Events by section ID"
    },
    "challenges-by-sectionid" : {
        name:"sections", type:"challenges", description:"Challenges by section ID"
    },
    "section-list" : {
        name:"sections", type:"", description:"Section list"
    },

    "search-sections" : {
        name:"sections/search", type:"", description:"Search sections", fields:['name', 'locale', 'sport_id']
    },
    "leagues-by-sectionid" : {
        name:"sections", type:"leagues", description:"Leagues by section ID"
    },
    "section-data" : {
        name:"sections", type:"", description:"Section data"
    },

    //leagues
    "league-data" : {
        name:"leagues", type:"", description:"League data"
    },
    "events-by-leagueid" : {
        name:"leagues", type:"events", description:"Events by league ID"
    },
    "league-list" : {
        name:"leagues", type:"", description:"League list"
    },
    "challenges-by-leagueid" : {
        name:"leagues", type:"challenges", description:"Chllenges by league ID"
    },
    "search-leagues" : {
        name:"leagues/search", type:"", description:"Search leagues", fields:['sport_id', 'locale', 'priority_min', 'name', 'section_id']
    },
    "seasons-by-leagueid" : {
        name:"leagues", type:"seasons", description:"Seasons by league ID"
    },

    //challenges
    "challenges-list" : {
        name:"challenges", type:"", description:"Challenges list"
    },
    "challenges-data" : {
        name:"challenges", type:"", description:"Challenges data"
    },

    //seasons
    "seasons-data" : {
        name:"seasons", type:"", description:"Season data"
    },
    "standing-tables-by-seasonid" : {
        name:"seasons", type:"standings-tables", description:"Standings-tables by season ID"
    },
    "season-list" : {
        name:"seasons", type:"", description:"Seasons list"
    },
    "events-by-seasonid" : {
        name:"seasons", type:"events", description:"Events by season ID"
    },
    "cup-trees-by-seasonid" : {
        name:"seasons", type:"cup-trees", description:"Cup-trees by season ID"
    },
    "teams-by-seasonid" : {
        name:"seasons", type:"teams", description:"Teams by season ID"
    },
    "search-seasons" : {
        name:"seasons/search", type:"", description:"Search seasons", fields:['year_start', 'locale', 'league_id', 'year_end', 'name']
    },

    //teams
    "lineups-by-teamid" : {
        name:"teams", type:"lineups", description:"Lineups by team ID"
    },
    "team-list" : {
        name:"teams", type:"", description:"Team list"
    }, 
    "players-by-teamid" : {
        name:"teams", type:"players", description:"Players by team ID"
    },
    "search-teams" : {
        name:"teams/search", type:"", description:"Search teams", fields:['section_id', 'country', 'name', 'locale', 'is_national', 'sport_id']
    },
    "h2h-events-by-teamid" : {
        name:"teams", type:"h2h-events", description:"H2H events by team ID", fields:['teams', 'h2h_events']
    },
    "subteams-by-teamid" : {
        name:"teams", type:"subteams", description:"Sub teams by team ID"
    },
    "team-data" : {
        name:"teams", type:"", description:"Team data"
    },
    "seasons-by-teamid" : {
        name:"teams", type:"seasons", description:"Seasons by team ID"
    },
    "metrika-by-teamid" : {
        name:"teams", type:"metrika", description:"Metrika by team ID"
    },
    "events-by-teamid" : {
        name:"teams", type:"events", description:"Events by team ID"
    },

    //events
    "search-events" : {
        name:"events/search", type:"", description:"Search events", fields:['sport_id', 'date_end', 'date_start', 'season_id', 'status', 'home_team_id', 'away_team_id', 'league_id', 'referee_id', 'venue_id', 'challenge_id']
    },
    "medias-by-eventid" : {
        name:"events", type:"medias", description:"Medias by event ID"
    },
    "event-list" : {
        name:"events", type:"", description:"Event list"
    },
    "series-by-eventid" : {
        name:"events", type:"series", description:"Series by event ID"
    },
    "event-data" : {
        name:"events", type:"", description:"Event data"
    },
    "event-live-list" : {
        name:"events/live", type:"", description:"Event live list"
    },
    "lineups-by-eventid" : {
        name:"events", type:"lineups", description:"Lineups by event ID"
    },
    "markets-by-eventid" : {
        name:"events", type:"markets", description:"Markets by event ID"
    },
    "tennis-points-by-eventid" : {
        name:"events", type:"points", description:"Tennis points by event ID"
    },
    "statistics-by-eventid" : {
        name:"events", type:"statistics", description:"Statistics by event ID"
    },
    "search-events-by-similar-name" : {
        name:"events/search-similar-name", type:"", description:"Searh events by similar name. name, sport_id, date is required and locale is optional params.", fields:['name', 'sport_id', 'date', 'locale']
    },
    "events-list-by-date" : {
        name:"events/date", type:"", description:"Event list by date"
    },
    "incidents-by-eventid" : {
        name:"events", type:"incidents", description:"Incidents by event ID"
    },

    //players
    "medias-by-playerid" : {
        name:"players", type:"medias", description:"Medias by player ID"
    },
    "transfers-by-playerid" : {
        name:"players", type:"transfers", description:"Transfers by player ID"
    },
    "player-list" : {
        name:"players", type:"", description:"Player list"
    },
    "statistics-by-playerid" : {
        name:"players", type:"statistics", description:"Statistics by player ID"
    },
    "teams-by-playerid" : {
        name:"players", type:"teams", description:"Teams by player ID"
    },
    "player-data" : {
        name:"players", type:"", description:"Player data"
    },
    "search-players" : {
        name:"players/search", type:"", description:"Search players", fields:['weight_max', 'team_id', 'date_birth_min', 'sport_id', 'locale', 'height_min', 'market_value_max', 'age_max', 'date_birth_max', 'market_value_min', 'shirt_number', 'preferred_foot', 'weight_min', 'name', 'age_min', 'rating_max', 'position', 'rating_min', 'nationality_code', 'height_max']
    },
    "lineupToPlayer-by-playerid" : {
        name:"players", type:"lineup-to-players", description:"LineupToPlayer by player ID"
    },
    "seasons-by-playerid" : {
        name:"players", type:"seasons", description:"Seasons by player ID"
    },

    //referees
    "referee-list" : {
        name:"referees", type:"", description:"Referee list"
    },
    "search-referees" : {
        name:"referees/search", type:"", description:"Search referees", fields:['age_min', 'locale', 'nationality_code', 'sport_id', 'name', 'age_max']
    },
    "referee-data" : {
        name:"referees", type:"", description:"Referee data"
    },
    "events-by-refereeid" : {
        name:"referees", type:"events", description:"Events by referee ID"
    },

    //managers
    "manager-list" : {
        name:"managers", type:"", description:"Manager list"
    },
    "manager-data" : {
        name:"managers", type:"", description:"Manager data"
    },
    "manager-transfers" : {
        name:"managers", type:"transfers", description:"Manager transfers"
    },
    "search-managers" : {
        name:"managers/search", type:"", description:"Search managers", fields:['name', 'sport_id', 'nationality_code', 'locale']
    },

    //medias
    "media-list" : {
        name:"medias", type:"", description:"Media list"
    },
    "media-data" : {
        name:"medias", type:"", description:"Media data"
    },

    //tennis rankings
    "tennis-rankings-WTA-list" : {
        name:"tennis-rankings/wta", type:"", description:"Tennis rankings WTA list"
    },
    "tennis-rankings-ATP-list" : {
        name:"tennis-rankings/atp", type:"", description:"Tennis rankings ATP list"
    },

    //meta
    "list-common-translations" : {
        name:"meta/line", type:"", description:"List of common translations"
    },
    "list-event-status" : {
        name:"meta/event-status", type:"", description:"List of event status"
    },
    "player-positions-list" : {
        name:"meta/player-positions", type:"", description:"Player positions list"
    },

    //venues
    "venues-list" : {
        name:"venues", type:"", description:"Venues list"
    },
    "venues-data" : {
        name:"venues", type:"", description:"Venues data"
    },
    
}
