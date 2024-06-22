import GroupTab from '../../UI/judgement/tab-group-stage'
import { useState, useEffect } from 'react'

export default function GroupStage() {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   ;(async () => {
  //     const myHeaders = new Headers()
  //     myHeaders.append('accept', 'application/json')
  //     myHeaders.append('Content-Type', 'application/json')
  //     const requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       body: null,
  //       redirect: 'follow',
  //       credentials: 'include',
  //     }
  //     const response = await fetch(
  //       'http://127.0.0.1:8000/api/participant/participant?offset=0&limit=10',
  //       requestOptions
  //     )
  //     const responseJson = await response.json()
  //     console.log(responseJson)
  //   })()
  // }, [])
  return (
    <>
      <GroupTab number={'1'} />

      {/* <GroupTab number={'2'} />

      <GroupTab number={'3'} /> */}
    </>
  )
}
