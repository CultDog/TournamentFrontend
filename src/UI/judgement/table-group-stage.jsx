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
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Количество матчей',
      key: 'matches',
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
      key: 'losses',
    },
  ]

  const getStats = (group) => {
    const teams = new Map()

    const addTeam = (team) => {
      teams.set(team, {
        matches: 0,
        wins: 0,
        losses: 0,
        draws: 0,
      })
    }

    const changeStats = (name, winner, draw) => {
      if (!teams.has(name)) {
        addTeam(name)
      }

      teams.get(name).matches++
      if (draw) {
        teams.get(name).draws++
      } else if (name == winner) {
        teams.get(name).wins++
      } else {
        teams.get(name).losses++
      }
    }

    group.matches.forEach((match) => {
      if (match.team1) {
        changeStats(match.team1.name, match.winner.name)
      }

      if (match.team2) {
        changeStats(match.team2.name, match.winner.name)
      }
    })

    const result = []

    for (let el of teams) {
      result.push({
        key: el[0],
        name: el[0],
        matches: el[1].matches,
        wins: el[1].wins,
        losses: el[1].losses,
        draws: el[1].draws,
        place: 1,
      })
    }
    result.sort((first, second) => {
      if (first.wins * 2 > second.wins * 2) {
        return -1
      }
      if (first.wins * 2 < second.wins * 2) {
        return 1
      }
      return 0
    })

    result.forEach((team, index) => {
      team.place = index + 1
    })



    console.log(result)

    return result
  }

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
      console.log(dataParticipant)
    })()
  }, [])

  return ( 
    <Flex vertical gap='large'>
      {
          dataParticipant?.map((participants, index) => 
            <Table 
              columns={columns} 
              key={index}
              dataSource={getStats(participants)}
              pagination={false}
            />
        )
      }
    </Flex>
  )
}