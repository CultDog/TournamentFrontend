import { Flex, Table, Typography } from 'antd'
import { useState, useEffect } from 'react'


export default function TableGroupStage() {
  const [dataParticipant, setParticipant] = useState([])
  const columns = [
    {
      title: 'Место',
      dataIndex: 'place',
      key: 'place',
    },
    {
      title: 'Участник',
      key: 'participants',
      dataIndex:'name',
      
    },
    {
      title: 'Количество матчей',
      dataIndex: 'matches',
    },
    {
      title: 'Победы',
      dataIndex: 'wins',
      key: 'wins',
      
    },
    {
      title: 'Ничьи',
      dataIndex: 'draws',
      key: 'draws',
    },
    {
      title: 'Поражения',
      dataIndex: 'losses',
      key: 'losses'
    }
  ]

  useEffect(() => {
    ;(async () => {
      const myHeaders = new Headers()
      myHeaders.append('accept', 'application/json')
      myHeaders.append('Content-Type', 'application/json')
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: null,
        redirect: 'follow',
        credentials: 'include',
      }
      const response = await fetch(
        'http://127.0.0.1:8000/api/match/get_group_matches?event_name=Event2&nomination_name=Hockey',
        requestOptions
      )
      let responseJson = await response.json()
      setParticipant(responseJson)
      console.log(responseJson)
    })()
  }, [])

  const getTeamStats = (data) => {
    const teamStats = {}

    data.forEach((group) => {
      group.matches.forEach((match) => {
        if (match.team1) {
          if (teamStats[match.team1.name]) {
            teamStats[match.team1.name].matches++;
            if (match.winner && match.winner.name === match.team1.name) {
              teamStats[match.team1.name].wins++;
            } else if (match.winner && match.winner.name !== match.team1.name) {
              teamStats[match.team1.name].losses++;
            } else {
              teamStats[match.team1.name].draws++;
            }
          } else {
            teamStats[match.team1.name] = {
              matches: 1,
              wins: match.winner && match.winner.name === match.team1.name ? 1 : 0,
              losses: match.winner && match.winner.name !== match.team1.name ? 1 : 0,
              draws: match.winner ? 0 : 1,
            };
          }
        }
        if (match.team2) {
          if (teamStats[match.team2.name]) {
            teamStats[match.team2.name].matches++;
            if (match.winner && match.winner.name === match.team2.name) {
              teamStats[match.team2.name].wins++;
            } else if (match.winner && match.winner.name !== match.team2.name) {
              teamStats[match.team2.name].losses++;
            } else {
              teamStats[match.team2.name].draws++;
            }
          } else {
            teamStats[match.team2.name] = {
              matches: 1,
              wins: match.winner && match.winner.name === match.team2.name ? 1 : 0,
              losses: match.winner && match.winner.name !== match.team2.name ? 1 : 0,
              draws: match.winner ? 0 : 1,
            };
          }
        }
      });
    });
  
    const sortedTeams = Object.entries(teamStats)
      .map(([team, stats]) => ({
        key: team,
        name: team,
        matches: stats.matches,
        wins: stats.wins,
        losses: stats.losses,
        draws: stats.draws,
      }))
      .sort((a, b) => {
        if (b.wins !== a.wins) {
          return b.wins - a.wins;
        } else if (a.draws !== b.draws) {
          return b.draws - a.draws;
        } else {
          return a.losses - b.losses;
        }
      })
      .map((team, index) => ({
        ...team,
        place: index + 1,
      }));
  
    return sortedTeams;
  }

  console.log("asdas")
  console.log(dataParticipant)
  console.log(getTeamStats(dataParticipant))

  return (
    <Flex vertical gap='large'>

      
      <Table
        
        columns={columns}
        dataSource={getTeamStats(dataParticipant)}
        pagination={false}
      />
      <Table
        
        columns={columns}
        dataSource={getTeamStats(dataParticipant)}
        pagination={false}
        />
    </Flex>
  )
}
