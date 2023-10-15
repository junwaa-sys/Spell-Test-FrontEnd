import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { Container, Typography } from '@mui/material'

import {
  loadHistory,
  loadRecordByWord,
  isLoadingHistory,
} from './testHistorySlice'
import { useAuth0 } from '@auth0/auth0-react'
import TestRecordTable from '../../components/TestHistoryTable'
import TestRecordTypeButton from '../../components/TestHistoryButton'
import TestRecordByWordTable from '../../components/TestRecordsByWordTable'

export default function TestHistory() {
  const [history, setHistory] = useState([])
  const [recordByWord, setRecordByWord] = useState([])
  const [recordType, setRecordType] = useState('total')
  const [sort, setSort] = useState('ASC')
  const { getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  const isLoading = useSelector(isLoadingHistory)

  async function loadTotalRecords() {
    const token = await getAccessTokenSilently()
    const response = await dispatch(loadHistory(token))
    setHistory(response.payload)
  }

  async function loadWordTestRecords() {
    const token = await getAccessTokenSilently()
    const response = await dispatch(loadRecordByWord(token))
    setRecordByWord(response.payload)
  }

  function handleButtonClick(type) {
    setRecordType(type)
  }

  function sortData(sortOrder) {
    if (sortOrder === 'ASC') {
      history.sort(
        (a, b) => a.correctTests / a.totalTests - b.correctTests / b.totalTests
      )
      recordByWord.sort(
        (a, b) => a.correctTests / a.totalTests - b.correctTests / b.totalTests
      )
    } else {
      history.sort(
        (a, b) => b.correctTests / b.totalTests - a.correctTests / a.totalTests
      )
      recordByWord.sort(
        (a, b) => b.correctTests / b.totalTests - a.correctTests / a.totalTests
      )
    }
    setSort(sortOrder)
  }

  useEffect(() => {
    loadTotalRecords()
    loadWordTestRecords()
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    //loading
    return (
      <Box sx={{ alignContent: 'center', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    )
  } else {
    return (
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">TEST RECORDS</Typography>
        <TestRecordTypeButton
          handleClick={handleButtonClick}
          sort={sort}
          sortData={sortData}
        />
        {recordType === 'total' ? (
          <TestRecordTable data={history} />
        ) : (
          <TestRecordByWordTable data={recordByWord} />
        )}
      </Container>
    )
  }
}
