import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import CompanyAgencyForm from './companyAgencyForm';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from '../../../components/common/supportChat';

const supportChatMessages = [
  {
    id: '1',
    avatar: '',
    message: 'Very good Tim! We are almost getting there, just one more step after this. Hang in there!'
  },
  {
    id: '2',
    avatar: '',
    message: 'However, if you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out. :)'
  }
];

function CompanyAgencyInfoStep() {
  const supportChatProps = {
    messages: supportChatMessages,
    questionPlaceholder: 'e.g. Why do you need Postal Code?'
  };

  const [container, setContainer] = useState(null);
  const bottomPanelRef = useCallback(node=>{
    if(node!==null) {
      setContainer(node);
    }
  }, []);

  return (
    <PageWrapper
      title="Company / Agency Information"
      leftPanel={<CompanyAgencyForm bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <SupportChat {...supportChatProps} />
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default CompanyAgencyInfoStep;
