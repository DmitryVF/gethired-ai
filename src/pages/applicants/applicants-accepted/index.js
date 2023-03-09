import React from 'react';
import Box from '@material-ui/core/Box';
import ApplicationCard from './applicationCard';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportCard from '../../../components/common/supportCard';
import SummaryCard from './summaryCard';
import ApplicantsHeader from './applicantsHeader';
import Header from '../../header';

function Application() {
  const applicationData = {
    information: {
      pagetitle: "Application Review",
      name: "Andy Bernard",
      match: "95%",
      title: "Front-End Developer",
      category: "Web, Mobile & Software Development",
      link: "portfolio.jimhalpert.com",
    },
    bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. This book is a treatise on the theory of ethics, very popular during.",
    skills:[
      'HTML (+5 years)',
      'CSS (+5 years)', 
      'Python (+2 years)',
      'Javascript: Angular (+3 years)',
      'PHP (+3 years)',
      'Javascript: Node.js (+3 years)',
      'Javascript: React (+3 years)',
      'Ruby (+2 years)',
      ],    

    requirements: [
      "At least 2 years of work experience in the field of web development",
      "Won Developer award from UK for 2019.",
      "Startup reached as nr. #1 startup in UK for 2019",
    ],
  };

  return (

    <React.Fragment>
    <Header/>
    <PageWrapper
      title=""
      leftPanel={<ApplicationCard {...applicationData} />}
      rightPanel={(
        <Box  width="316px">
          <SummaryCard />
          <SupportCard />
        </Box>
      )}
    />
    </React.Fragment>
  )
}

export default Application;
