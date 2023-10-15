import * as React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { Container } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

export default function TestRecordTypeButton({ handleClick, sort, sortData }) {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <ButtonGroup
        sx={{ m: 2 }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button id="total" onClick={(e) => handleClick(e.target.id)}>
          Total
        </Button>
        <Button id="word" onClick={(e) => handleClick(e.target.id)}>
          Word
        </Button>
      </ButtonGroup>
      <ButtonGroup sx={{ m: 2 }}>
        <Button
          onClick={() => {
            sort === 'ASC' ? sortData('DES') : sortData('ASC')
          }}
        >
          Sort by Accuracy
          {sort === 'ASC' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
        </Button>
      </ButtonGroup>
    </Container>
  )
}
