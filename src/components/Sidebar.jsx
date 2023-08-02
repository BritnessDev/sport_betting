import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons" 
import { Link } from "react-router-dom"

const Sidebar = () => {

    const [show, setShow] = useState('')
    const { sportid } = useParams()

    // const sideBarListOnClick = (data) => {
    //     if(data === "sports"){
    //         if(show === ''){
    //             setShow('sports')
    //         }else if(show === 'sports'){
    //             setShow('')
    //         }else {
    //             setShow('sports')
    //         }
    //     }if(data === "sections"){
    //         if(show === ''){
    //             setShow('sections')
    //         }else if(show === 'sections'){
    //             setShow('')
    //         }else {
    //             setShow('sections')
    //         }
    //     }if(data === "teams"){
    //         if(show === ''){
    //             setShow('teams')
    //         }else if(show === 'teams'){
    //             setShow('')
    //         }else setShow('teams')
    //     }
    // }

    const sideBarListOnClick = (data) => {
        if(data === "sports"){
            setShow("sports")
            localStorage.setItem('show', 'sports')
        }else if(data === "sections"){
            setShow("sections")
            localStorage.setItem('show', 'sections')
        }else if(data === "leagues"){
            setShow("leagues")
            localStorage.setItem('show', 'leagues')
        }else if(data === "challenges"){
            setShow("challenges")
            localStorage.setItem('show', 'challenges')
        }else if(data === "seasons"){
            setShow("seasons")
            localStorage.setItem('show', 'seasons')
        }else if(data === "teams"){
            setShow("teams")
            localStorage.setItem('show', 'teams')
        }else if(data === "events"){
            setShow("events")
            localStorage.setItem('show', 'events')
        }else if(data === "players"){
            setShow("players")
            localStorage.setItem('show', 'players')
        }else if(data === "referees"){
            setShow("referees")
            localStorage.setItem('show', 'referees')
        }else if(data === "managers"){
            setShow("managers")
            localStorage.setItem('show', 'managers')
        }else if(data === "medias"){
            setShow("medias")
            localStorage.setItem('show', 'medias')
        }else if(data === "tennis rankings"){
            setShow("tennis rankings")
            localStorage.setItem('show', 'tennis rankings')
        }else if(data === "meta"){
            setShow("meta")
            localStorage.setItem('show', 'meta')
        }else if(data === "venues"){
            setShow("venues")
            localStorage.setItem('show', 'venues')
        }
    } 

    useEffect(() => {
        const show = localStorage.getItem('show');
        setShow(show || '');
    },[show])

    return (
        <div className="flex">
            <div className="flex flex-col p-3 bg-gray-800 shadow w-[260px]">{/* w-60 */}
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold text-white">{sportid}</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-md">
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('sports')}>
                                    {
                                        show === "sports"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Sports</span>
                                </button>
                                {
                                    show === 'sports'?
                                        <div>
                                            <Link to="/teams-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Teams by sport ID</Link>
                                            <Link to="/events-by-sportid-date" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Events by sport ID and date</Link>
                                            <Link to="/managers-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Managers by sport ID</Link>
                                            <Link to="/sport-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Sport data</Link>
                                            <Link to="/sport-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Sport list</Link>
                                            <Link to="/sections-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Sections by sport ID</Link>
                                            <Link to="/leagues-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Leagues by sport ID</Link>
                                            <Link to="/challenges-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Challenges by sport ID</Link>
                                            <Link to="/players-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Players by sport ID</Link>
                                            <Link to="/events-live-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Events live by sport ID</Link>
                                            <Link to="/events-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Events by sport ID</Link>
                                            <Link to="/seasons-by-sportid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Seasons by sport ID</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('sections')}>
                                    {
                                        show === "sections"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100 ">Sections</span>
                                </button>
                                {
                                    show === 'sections'?
                                        <div>
                                            <Link to="/events-by-sectionid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Events by section ID</Link>
                                            <Link to="/challenges-by-sectionid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Challenges by section ID</Link>
                                            <Link to="/section-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Section List</Link>
                                            <Link to="/search-sections" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search sections</Link>
                                            <Link to="/leagues-by-sectionid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Leagues by section ID</Link>
                                            <Link to="/section-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Section data</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('leagues')}>
                                    {
                                        show === "leagues"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Leagues</span>
                                </button>
                                {
                                    show === 'leagues'?
                                        <div>
                                            <Link to="/league-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">League data</Link>
                                            <Link to="/events-by-leagueid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Events by league ID</Link>
                                            <Link to="/league-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">League list</Link>
                                            <Link to="/challenges-by-leagueid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Challenges by league ID</Link>
                                            <Link to="/search-leagues" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search leagues</Link>
                                            <Link to="/seasons-by-leagueid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Seasons by league ID</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('challenges')}>
                                    {
                                        show === "challenges"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Challenges</span>
                                </button>
                                {
                                    show === 'challenges'?
                                        <div>
                                            <Link to="/challenges-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Challenges list</Link>
                                            <Link to="/challenges-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Challenges data</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('seasons')}>
                                    {
                                        show === "seasons"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Seasons</span>
                                </button>
                                {
                                    show === 'seasons'?
                                        <div>
                                            <Link to="/seasons-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Seasons data</Link>
                                            <Link to="/standing-tables-by-seasonid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Standings-tables by season ID</Link>
                                            <Link to="/season-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Season list</Link>
                                            <Link to="/events-by-seasonid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Events by season ID</Link>
                                            <Link to="/cup-trees-by-seasonid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Cup-trees by season ID</Link>
                                            <Link to="/teams-by-seasonid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Teams by season ID</Link>
                                            <Link to="/search-seasons" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search seasons</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('teams')}>
                                    {
                                        show === "teams"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Teams</span>
                                </button>
                                {
                                    show === 'teams'?
                                        <div>
                                            <Link to="/lineups-by-teamid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Lineups by team ID</Link>
                                            <Link to="/team-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Team List</Link>
                                            <Link to="/players-by-teamid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Players by team ID</Link>
                                            <Link to="/search-teams" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search teams</Link>
                                            <Link to="/h2h-events-by-teamid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">H2H events by team ID</Link>
                                            <Link to="/subteams-by-teamid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Sub teams by team ID</Link>
                                            <Link to="/team-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Team data</Link>
                                            <Link to="/seasons-by-teamid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Seasons by team ID</Link>
                                            <Link to="/metrika-by-teamid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Metrika by team ID</Link>
                                            <Link to="/events-by-teamid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Events by team ID</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('events')}>
                                    {
                                        show === "events"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Events</span>
                                </button>
                                {
                                    show === 'events'?
                                        <div>
                                            <Link to="/search-events" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search events</Link>
                                            <Link to="/lineups-by-eventid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Lineups by event ID</Link>
                                            <Link to="/medias-by-eventid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Medias by event ID</Link>
                                            <Link to="/event-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Event list</Link>
                                            <Link to="/series-by-eventid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Series by event ID</Link>
                                            <Link to="/event-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Event data</Link>
                                            <Link to="/event-live-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Event live list</Link>
                                            <Link to="/markets-by-eventid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Markets by event ID</Link>
                                            <Link to="/tennis-points-by-eventid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Tennis points by event ID</Link>
                                            <Link to="/statistics-by-eventid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Statistics by event ID</Link>
                                            <Link to="/search-events-by-similar-name" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search events by similar name</Link>
                                            <Link to="/events-list-by-date" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Event list by date</Link>
                                            <Link to="/incidents-by-eventid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Incidents by event ID</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('players')}>
                                    {
                                        show === "players"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Players</span>
                                </button>
                                {
                                    show === 'players'?
                                        <div>
                                            <Link to="/medias-by-playerid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Medias by player ID</Link>
                                            <Link to="/transfers-by-playerid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Transfers by player ID</Link>
                                            <Link to="/player-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Player list</Link>
                                            <Link to="/statistics-by-playerid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Statistics by player ID</Link>
                                            <Link to="/teams-by-playerid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Teams by player ID</Link>
                                            <Link to="/player-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Player data</Link>
                                            <Link to="/search-players" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search players</Link>
                                            <Link to="/lineupToPlayer-by-playerid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">LineupToPlayer by player ID</Link>
                                            <Link to="/seasons-by-playerid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Seasons by player ID</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('referees')}>
                                    {
                                        show === "referees"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Referees</span>
                                </button>
                                {
                                    show === 'referees'?
                                        <div>
                                            <Link to="/referee-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Referee list</Link>
                                            <Link to="/search-referees" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search referees</Link>
                                            <Link to="/referee-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Referee data</Link>
                                            <Link to="/events-by-refereeid" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Events by referee ID</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('managers')}>
                                    {
                                        show === "managers"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Managers</span>
                                </button>
                                {
                                    show === 'managers'?
                                        <div>
                                            <Link to="/manager-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Manager data</Link>
                                            <Link to="/manager-transfers" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Manager transfers</Link>
                                            <Link to="/manager-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Manager list</Link>
                                            <Link to="/search-managers" className="hover:bg-gray-700 hover:text-black block text-blue-500 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Search managers</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('medias')}>
                                    {
                                        show === "medias"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Medias</span>
                                </button>
                                {
                                    show === 'medias'?
                                        <div>
                                            <Link to="/media-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Media list</Link>
                                            <Link to="/media-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Media data</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('tennis rankings')}>
                                    {
                                        show === "tennis rankings"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Tennis rankings</span>
                                </button>
                                {
                                    show === 'tennis rankings'?
                                        <div>
                                            <Link to="/tennis-rankings-WTA-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Tennis rankings WTA list</Link>
                                            <Link to="/tennis-rankings-ATP-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Tennis rankings ATP list</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('meta')}>
                                    {
                                        show === "meta"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Meta</span>
                                </button>
                                {
                                    show === 'meta'?
                                        <div>
                                            <Link to="/list-common-translations" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">List of common translations</Link>
                                            <Link to="/list-event-status" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">List of event status</Link>
                                            <Link to="/player-positions-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Player positions list</Link>
                                        </div>:<></>
                                }
                            </li>
                            <li className="rounded-sm">
                                <button className="flex items-center p-2 space-x-3 rounded-md w-full" onClick={() => sideBarListOnClick('venues')}>
                                    {
                                        show === "venues"?
                                        <FontAwesomeIcon icon={faMinus} color="white" style={{paddingRight:'1px'}}/>:
                                        <FontAwesomeIcon icon={faPlus} color="white" style={{paddingRight:'1px'}}/>
                                    }
                                    <span className="text-gray-100">Venues</span>
                                </button>
                                {
                                    show === 'venues'?
                                        <div>
                                            <Link to="/venues-list" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Venues list</Link>
                                            <Link to="/venues-data" className="hover:bg-gray-700 hover:text-white block text-gray-100 p-2 space-x-3 rounded-md pt-2 pb-2 ml-6 space-y-1 text-md">Venues data</Link>
                                        </div>:<></>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar