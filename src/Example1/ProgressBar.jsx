import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import LinearProgress from '@material-ui/core/LinearProgress'

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#097e80',
  },
}))(LinearProgress)

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: '#097e80',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
}))

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
})

export default function CustomizedProgressBars() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <h1>50%</h1>
      <BorderLinearProgress variant="determinate" value={50} />
    </div>
  )
}
