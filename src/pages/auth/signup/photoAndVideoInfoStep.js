import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import PhotoAndVideoForm from './photoAndVideoForm';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from "../../../components/common/supportChat";

const supportChatMessages = [
  {
    id: '1',
    avatar: '',
    message: 'We got it Tim! Just one more step and we are done. However, you can complete it later, but we strongly advise you NOT to publish Opportunity without it.'
  },
  {
    id: '2',
    avatar: '',
    message: 'Anyway, this is the part where you are showing to Candidate who you are as Company/Agency. Also, this Information will be included in every Opportunity you are posting as section, “Who you are”.'
  },
  {
    id: '3',
    avatar: '',
    message: 'However, if you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out. :)'
  }
];

function PhotoAndVideoInfoStep() {
  const supportChatProps = {
    messages: supportChatMessages,
    questionPlaceholder: 'e.g. What is Bio?'
  };

  const [container, setContainer] = useState(null);
  const bottomPanelRef = useCallback(node=>{
    if(node!==null) {
      setContainer(node);
    }
  }, []);


  return (
    <PageWrapper
      title="Photos and Videos"
      leftPanel={<PhotoAndVideoForm bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default PhotoAndVideoInfoStep;
