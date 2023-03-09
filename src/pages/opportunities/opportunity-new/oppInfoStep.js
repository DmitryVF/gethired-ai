import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import OppoInfoForm from './oppoInfoForm';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from "../../../components/common/supportChat";

const supportChatMessages1 = [
  { id: '1', avatar: '', message: 'Hello there Tim, my name is David, The AI of GetHired.ai and I am here to help you with your Opportunity creation process. :)' },
  {
    id: '2',
    avatar: '',
    message: 'On this step we require from you to fill out some information about the Opportunity you are creating.'
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

function OppoInfoStep() {
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
      title="Opportunity Information"
      leftPanel={<OppoInfoForm bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default OppoInfoStep;
