import { Flex, Table, Tooltip, Typography } from 'antd'
import { useState, useEffect } from 'react'

export default function TableGroupStage() {
  const [dataParticipant, setParticipant] = useState([])
  const columns = [
    {
      title: <Tooltip title="Место">Место</Tooltip>,
      dataIndex: 'place',
      key: 'place',
    },
    {
      title: <Tooltip title="Участники">Участники</Tooltip>,
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: <Tooltip title="Количество сыгранных матчей">Матчи</Tooltip>,
      key: 'matches',
      dataIndex: 'matches',
    },
    {
      title: <Tooltip title="Количество выигранных матчи">Победы</Tooltip>,
      dataIndex: 'wins',
      key: 'wins',
    },
    {
      title: (
        <Tooltip title="Количество матчей,сыгранных вничью">Ничьи</Tooltip>
      ),
      dataIndex: 'draws',
      key: 'draws',
    },
    {
      title: <Tooltip title="Количество проигранных матчей">Поражения</Tooltip>,
      dataIndex: 'losses',
      key: 'losses',
    },
    {
      title: <Tooltip title="Количество заработанных очков">Очки</Tooltip>,
      dataIndex: 'points',
      key: 'points',
    },
    {
      title: (
        <Tooltip title="Количество баллов, выставленных судьёй">Счёт</Tooltip>
      ),
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
        points: 0,
      })
    }

    const changeStats = (name, winner, draw) => {
      if (!teams.has(name)) {
        addTeam(name)
      }

      teams.get(name).matches++
      if (draw) {
        teams.get(name).draws++
        teams.get(name).points += 1
      } else if (name == winner) {
        teams.get(name).wins++
        teams.get(name).points += 3
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
        points: el[1].points,
      })
    }
    result.sort((first, second) => {
      if (first.points > second.points) {
        return -1
      }
      if (first.points < second.points) {
        return 1
      }
      return 0
    })

    result.forEach((team, index) => {
      team.place = index + 1
    })
    console.log
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
    })()
  }, [])

  return (
    <Flex vertical gap="large">
      {dataParticipant?.map((participants, index) => (
        <div key={index}>
          <div>Группа {index + 1}</div>
          <Table
            style={{
              width: 100,
            }}
            pagination={false}
            columns={columns}
            dataSource={getStats(participants)}
            key={index}
          />
        </div>
      ))}
    </Flex>
  )
}
