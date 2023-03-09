import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import OppoInfoForm4 from './oppoInfoForm4';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from "../../../components/common/supportChat";

const supportChatMessages = [
  { id: '1', avatar: '', message: 'We getting there Tim, we getting there. Hang in there!' },
  {
    id: '2',
    avatar: '',
    message: 'On this step we require from you to add bulletins of what you require from a Candidate to do on daily basis and such.'
  },
  {
    id: '3',
    avatar: '',
    message: 'However, if you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out. :)'
  },
];

function OppoInfoStep4() {
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
      title="What Candidate will do"
      leftPanel={<OppoInfoForm4 bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default OppoInfoStep4;
