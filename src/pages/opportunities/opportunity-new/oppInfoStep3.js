import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import OppoInfoForm3 from './oppoInfoForm3';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from "../../../components/common/supportChat";

const supportChatMessages = [
  { id: '1', avatar: '', message: 'Woohooo, we are at 3rd step! Hang in there. Few more step and you’ll find perfect candidate within couple of days!' },
  {
    id: '2',
    avatar: '',
    message: 'Alright now. On this step we require from you to add bulletins of what you considare Opportunity Requirments and what Candidate gets “extra” poins for.'
  },
  {
    id: '3',
    avatar: '',
    message: 'However, if you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out. :)'
  }

];

function OppoInfoStep3() {
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
      title="Opportunity Requirments"
      leftPanel={<OppoInfoForm3 bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default OppoInfoStep3;
