import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from '../../components/common/header';
import SupportMiniChatForm from '../../components/common/form/supportMiniChatForm';
import SupportCard from '../../components/common/supportCard';
import appConfig from '../../config/app';

const supportChatMessages = [
  {
    id: '1',
    avatar: '',
    message: 'Hello Tim, my name David the AI of GetHired.ai. I am here to help you with any question you have, well almost any question. :)'
  },
  {
    id: '2',
    avatar: '',
    message: 'If you are wondering how something works or you have a problem posting an Opportunity, please do let me know.'
  }
];

function ProfileAskDavid() {
  const isMd = useMediaQuery(theme => theme.breakpoints.down('md'));

  const headerProps = {
    rightLink: {
      link: '/',
      label: 'Return to Home'
    }
  };

  const supportMiniChatProps = {
    messages: supportChatMessages,
    questionPlaceholder: 'e.g. What is the “Opportunity”?'
  };

  return (
    <div>
      <Header {...headerProps} />
      <Box height={`calc(100vh - ${appConfig.headerHeight})`} display="flex" flexDirection="column">
        <Grid container style={{ height: '100%' }}>
          <Grid item container xs={12} md={6} lg={8} display="flex" alignItems="center" justify="flex-end">
            <Grid item xs>
              <Box px={5}>
                <Grid container alignItems="flex-end">
                  <Grid item xs={12} md={12} lg={6} container justify={isMd ? 'center' : 'flex-end'}>
                    <Box maxWidth="320px">
                      <SupportMiniChatForm {...supportMiniChatProps} />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6} container justify={isMd ? 'center' : 'flex-end'}>
                    <Box minWidth="320px" mb={4}>
                      <SupportCard />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box bgcolor="#C4C4C4" height="100%" />
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default ProfileAskDavid
