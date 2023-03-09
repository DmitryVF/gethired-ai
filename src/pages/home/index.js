import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ProfileProgressInfo from './profileProgressInfo'
import NewApplicants from './newApplicants'
import UnreadChats from './unreadChats'
import SmallCard from './smallCard'
import InfoCard from './infoCard'
import BottomCard from './bottomCard'
import { bottomBox } from './classes'
import MiniChat from '../chats/miniChat'
import { ReactComponent as ClockSVG } from '../../assets/icons/clock.svg'
import { ReactComponent as CalendarSVG } from '../../assets/icons/calendar.svg'
import { ReactComponent as StarsSVG } from '../../assets/icons/stars.svg'
import { ReactComponent as QuestionsSVG } from '../../assets/icons/questions.svg'
import { ReactComponent as InviteSVG } from '../../assets/icons/invite.svg'
import { ReactComponent as PhotoSvg } from '../../assets/icons/photo.svg'
import { Link} from 'react-router-dom';
import {ASK_DAVID, NEW_OPP, TEAM } from '../../routes';
const useStyles = makeStyles(() => ({
  bottomBox: {
    ...bottomBox,
    flexDirection: 'row',
    padding: '8px 16px 8px 16px'
  },
  bigBox: {
    height: '100%',
    background: '#C4C4C4',
    borderRadius: '12px',
  },
  nestedBigBox: {
    padding: '24px 24px 0 32px'
  },
  infoGrid: {
    height: 'calc(100% + 16px)'
  },
  infoGridItem: {
    display: 'flex'
  },
  smallBox: {
    background: '#C4C4C4',
    borderRadius: '12px',
    padding: '24px 15px 18px 15px',
    width: '100%'
  },
  photoContainer: {
    minWidth: '86px',
    minHeight: '86px',
    background: 'black',
    borderRadius: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallText: {
    fontSize: '10px'
  },
   link: {
    color: "black",
   textDecoration: 'none',
  }
}))

function Home() {
  const classes = useStyles()
  return (
    <Box p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ProfileProgressInfo />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box className={classes.bigBox}>
            <Box className={classes.nestedBigBox}>
              <NewApplicants />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box className={classes.bigBox}>
            <Box className={classes.nestedBigBox}>
              <UnreadChats />
            </Box>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={4} xl={4} item>
          <Grid container spacing={2} className={classes.infoGrid}>
            <Grid item xs={6} className={classes.infoGridItem}>
              <Box className={classes.smallBox}>
                <SmallCard
                  number={1}
                  title="Active Opportunity"
                  icon={ClockSVG}
                  firstRowDescription="30 days remaining"
                  secondRowDescription="(Expires: 12 Oct, 2019)"
                />
              </Box>
            </Grid>

            <Grid item xs={6} className={classes.infoGridItem}>
              <Box className={classes.smallBox}>
                <SmallCard
                  number={7}
                  title="Accepted Applicants"
                  icon={CalendarSVG}
                  firstRowDescription="40% more than previous month "
                  secondRowDescription="(Aug, 2019: 5 Accepted)"
                />
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.infoGridItem}>
              <InfoCard />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Link to={NEW_OPP} className={classes.link}>
            <BottomCard title="+ Create new Opportunity" icon={StarsSVG} />
          </Link> 
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Link to={ASK_DAVID} className={classes.link}>
            <BottomCard title="Ask David a Question" icon={QuestionsSVG} />
          </Link>  
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Link to={TEAM} className={classes.link}>
            <BottomCard title="Invite new Member to Team" icon={InviteSVG} />
          </Link>  
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
          <Box className={classes.bottomBox}>
            <Box className={classes.photoContainer}>
              <PhotoSvg />
            </Box>
            <Box marginLeft="18px" width="100%">
              <Typography variant="subtitle2">Kelly Kapoor</Typography>
              <Typography
                variant="subtitle2"
                className={classes.smallText}
              >
                GETHIRED CHAT SUPPORT
              </Typography>
              <MiniChat/>
               
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
