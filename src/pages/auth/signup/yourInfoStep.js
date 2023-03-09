import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import YourInfoForm from './yourInfoForm';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from "../../../components/common/supportChat";

const supportChatMessages = [
  { id: '1', avatar: '', message: 'Hello and welcome to Company Registration of GetHired.ai.' },
  {
    id: '2',
    avatar: '',
    message: 'My name is David, and I am the AI of GetHired.ai and I am here to help you with your Company Profile creating process. :)'
  },
  {
    id: '3',
    avatar: '',
    message: 'On this step we require from you to fill out some information about yourself so we can proceed to next step.'
  },
  {
    id: '4',
    avatar: '',
    message: 'However, if you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out. :)'
  }
];

function YourInfoStep() {
  const supportChatProps = {
    messages: supportChatMessages,
    questionPlaceholder: 'e.g. Why I need password?'
  };

  const [container, setContainer] = useState(null);
  const bottomPanelRef = useCallback(node=>{
    if(node!==null) {
      setContainer(node);
    }
  }, []);

  return (
    <PageWrapper
      title="Your Information"
      leftPanel={<YourInfoForm bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default YourInfoStep;
