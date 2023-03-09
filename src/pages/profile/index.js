import React from 'react';
import Box from '@material-ui/core/Box';
import ProfileForm from './profileForm';
import PageWrapper from '../../components/common/pageWrapper';
import SupportChat from '../../components/common/supportChat';
import PercentBadge from '../../components/common/form/percentBadge';

const supportChatMessages = [
  {
    id: '1',
    avatar: '',
    message: 'Hey Tim, I’m very happy you are going to get your Profile to 100%. So you can start searching for perfect Candidate.'
  },
  {
    id: '2',
    avatar: '',
    message: 'This is the part where you are showing to Candidate who you are as Company/Agency. Also, this Information will be included in every Opportunity you are posting as section, “Who you are”.'
  },
  {
    id: '3',
    avatar: '',
    message: 'However, if you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out. :)'
  }
];

function Profile() {
  const supportChatProps = {
    messages: supportChatMessages,
    questionPlaceholder: 'e.g. What is Bio?'
  };

  return (
    <PageWrapper
      title="Who you are as Company/Agency?"
      badge={<PercentBadge>10</PercentBadge>}
      leftPanel={<ProfileForm />}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
    />
  )
}

export default Profile;
