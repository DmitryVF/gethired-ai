import React from 'react';
import Box from '@material-ui/core/Box';
import ProfileCard from './profileCard';
import PageWrapper from '../../components/common/pageWrapper';
//import SupportCard from '../../components/common/supportCard';
import SupportChat from "../../components/common/supportChat";
//import OpportunityHeader from './opportunityHeader';
import Grid from '@material-ui/core/Grid';


function CompanyProfile({onEdit}) {
  // console.log(onEdit);
  // onEdit();

  const supportChatMessages = [
  { id: '1', avatar: '', message: 'Hello there Tim, my name is David, The AI of GetHired.ai and I am here to assist you with your questions.' },
  { id: '2', avatar: '', message: 'It seems you have completed your Profile to 100% and you are ready to find perfect Candidate for your business.'},
  { id: '3', avatar: '', message: 'Oh, it looks you  have  no  active  Opportunities. Do  you want  to Create New Opportunity?'
  }
];

const supportChatProps = {
    messages: supportChatMessages,
    questionPlaceholder: 'e.g. How to change Company Size?'
  };

  const profileData = {
    information: {
      title: "Company Profile",
      name: "Pixels & Graphs Inc.",
      website: "www.pixelsandgraphs.com",
      headquarter: "Vienna, Austria",
      adress: "13 Seilerstätte",
      size:  "26-50 employees",
      postalCode: "1010",
      whoWeAre : ["One of our company goals has always been to create a workplace where developers can quickly grow their professional careers and use all of their skills to create innovative products, software, apps and websites. We've come really close because we aren't growing the team with 'lone wolves', but developers who want to learn something new, who want to share that knowledge with others and who are ready to jump into that problem-solving mode whenever they encounter any kind of challenge. And, of course, have fun while they're doing it!",
                  "Right now, we have 31 members in our Development department. That's 31 amazing minds who can look at a project from countless sides to find the right way to deliver the best result. And if their primary stack of PHP with Symfony, MySQL and JavaScript aren't enough to crack the issue, they'll learn a new language & use new tech - anything that'll make their job easier and themselves more proficient."
                  ],
    }
  };

  return (

    <React.Fragment>
    <Box> 
    </Box>
    <Grid container mt="-100px">
      <Grid item md={8}>      
        <ProfileCard onEdit={onEdit}  { ...profileData.information} />
      </Grid>  
      <Grid item md={4}>
        <Box  width="335px">
          <SupportChat {...supportChatProps} />
        </Box>
      </Grid>
     </Grid> 
    </React.Fragment>
  )
}

export default CompanyProfile;
