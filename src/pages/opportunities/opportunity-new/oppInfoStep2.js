import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import OppoInfoForm2 from './oppoInfoForm2';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from "../../../components/common/supportChat";

const supportChatMessages1 = [
  { id: '1', avatar: '', message: 'Here comes the Magic! :)' },
  {
    id: '2',
    avatar: '',
    message: 'On this step we require from you to pick Category and Skills for Candidate. This will help us to get your better percantage for Candidate Match.'
  },
  {
    id: '3',
    avatar: '',
    message: 'However, if you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out. :)'
  }
];

function OppoInfoStep2() {
  const supportChatProps = {
    messages: supportChatMessages1,
    questionPlaceholder: 'e.g. What is Opporunity Duration?'
  };

  const [container, setContainer] = useState(null);
  const bottomPanelRef = useCallback(node=>{
    if(node!==null) {
      setContainer(node);
    }
  }, []);

  return (
    <PageWrapper
      title="Opportunity Category"
      leftPanel={<OppoInfoForm2 bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default OppoInfoStep2;
