/* eslint-disable prettier/prettier */
import { EditOutlined } from '@ant-design/icons'
import { Card, Flex, Tooltip, Table, Button, Modal } from 'antd'
import { useEffect, useState } from 'react'
import ModalGroupStage from './modal-matches-group-stage'

function MatchesGroupStage() {
  const [dataMatches, setMatches] = useState([])


  const getMatches = (dataMatches) => {
    let result = []
    let matchNumber = 1
    dataMatches?.map((group) => {
      group?.matches.map((match) => {
        match.team1 = match.team1?.name
        match.team2 = match.team2?.name
        const { team1, team2, match_id } = match
        var team = { team1, team2, matchNumber }
        if (team.team1 === undefined) {
          team.team1 = 'Отсутствует'
        } else if (team.team2 === undefined) {
          team.team2 = 'Отсутствует'
        }
        result.push(team)
        matchNumber++
      })
    })
    
    return result
  }

  let data = getMatches(dataMatches)

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
        'http://127.0.0.1:8000/api/match/get_group_matches?event_name=Event3&nomination_name=Tennis',
        requestOptions
      )
      let responseJson = await response.json()

      setMatches(responseJson)
    })()
  }, [])

  // eslint-disable-next-line react/prop-types
  const MatchCard = ( {match} ) => {
    let columns = [
      {
        title: <Tooltip title="Команды">Команды</Tooltip>,
        key: 'team1',
        render: (record) => (
          <div>
            <div>{record?.team1}</div>
            <div>{record?.team2}</div>
          </div>
        ),
      },
      {
        title: <Tooltip title="Результаты матча">Результат</Tooltip>,
        key: 'result',
        render: (record) => (
          <ModalGroupStage match={record}/>
        ),
      },
    ]

    return (
      <Card title={`Матч ${match.matchNumber}`} style={{ height: '300px' }}>
        <Table
          columns={columns}
          dataSource={[match]}
          pagination={false}
          style={{
            
          }}
        />
      </Card>
    )
  }
  return (
    <Flex vertical gap="large" style={{width:'50%'}}>
      {data.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </Flex>
  )
}

export default MatchesGroupStage
