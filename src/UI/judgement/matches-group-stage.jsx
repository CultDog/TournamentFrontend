import { Grid, Row, Col, Card } from 'antd'
import { useEffect, useState } from 'react'

function MatchesGroupStage() {
  const [dataMatches, setMatches] = useState([])
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

      setMatches(responseJson)
      console.log(responseJson)
    })()
  }, [])

  return dataMatches.map((group) => {
    group.matches.map((match) => {
      ;<Card title={match.match_id}>
        ${match.team1}${match.team2}
      </Card>
    })
  })
}

export default MatchesGroupStage
