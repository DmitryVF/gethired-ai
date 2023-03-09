import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import OppoInfoForm5 from './oppoInfoForm5';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from "../../../components/common/supportChat";

const supportChatMessages = [
  { id: '1', avatar: '', message: 'We have finally arrived to last step of Opportunity Creation process, huray!' },
  {
    id: '2',
    avatar: '',
    message: 'On this last step we require from you to add bulletins of what you offer to a Candidate from this Opportunity.'
  },
  {
    id: '3',
    avatar: '',
    message: 'However, and as always. If you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out.'
  }
];

function OppoInfoStep5() {
  const supportChatProps = {
    messages: supportChatMessages,
    questionPlaceholder: 'e.g. Show me an example of bulletin'
  };

  const [container, setContainer] = useState(null);
  const bottomPanelRef = useCallback(node=>{
    if(node!==null) {
      setContainer(node);
    }
  }, []);

  return (
    <PageWrapper
      title="What this Opportunity Offers"
      leftPanel={<OppoInfoForm5 bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default OppoInfoStep5;
