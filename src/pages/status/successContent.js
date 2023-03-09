import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PageTitle from '../../components/common/pageTitle';

function SuccessContent() {
  return (
    <React.Fragment>
      <PageTitle title="Congratulations Tim!" />
      <Box mt={4} mb={3}>
        <PageTitle
          title="You’ve made your Company Profile. We strongly suggest you to complete Company Profile to 100% before posting a new Opportunity."
        />
      </Box>
      <Box mb={5}>
        <PageTitle
          title="Good luck and we hope you find a perfect Candidate for your business!"
        />
      </Box>
      <Box mb={4}>
        <Typography variant="subtitle1" align="left">
          <strong>Attention:</strong> You have to Review every Application and you have 7 days to respond to it. By Reviweing you
          need to Approve or Reject wanted Applicant. If you Approve Applicant, you both are going into Chat. If you
          Reject it, you have to writte a short reason why you are rejecting the Applicant.
          <Box mb={3} />
          As soon Candidate applies, the Applicant will appear under ‘Applicants’ page where you can Review them.
        </Typography>
      </Box>
    </React.Fragment>
  )
}

export default SuccessContent;
