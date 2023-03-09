import React, {useCallback, useState} from 'react';
import Box from '@material-ui/core/Box';
import OppoInfoForm6 from './oppoInfoForm6';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportChat from "../../../components/common/supportChat";
import OverViewCard from "./overviewCard";

const supportChatMessages1 = [
  { id: '1', avatar: '', message: 'We have your Opportunity almost up and running!' },
  {
    id: '2',
    avatar: '',
    message: 'On this step we require from you to fill out some information about the Opportunity you are creating.'
  },
  {
    id: '3',
    avatar: '',
    message: 'Please review your Opportunity one last time and if everything is alright click ‘Publish’ to publish it. If not, click on the ‘Edit’ Icon which is on left side of section which you want to Edit.'
  },
  {
    id: '4',
    avatar: '',
    message: 'However, and as always. If you have any questions about any of the steps on the left side, please do ask me about it. I would be more than glad to help you out.'
  }
];

const opportunityData = {
    information: {
      tytle: "Front-End Developer",
      at: "Pixels & Graphs Inc.",
      duration: 30,
      remaining: 25,
      since: "12 Sep, 2019",
      place: "Berlin, Germany",
      type: "Full Time",
      salaryFrom: "40.000",
      salaryTo: "60.000",
      experience: "2 years"
    },
    category: "Web, Mobile & Software Development",
    skills:[
      'Desktop Software Development',
      'Ecommerce Development', 
      'Mobile Development',
      'Q/A & Testing',
      'Java Script',
      'React.js',
      'Angular',
      'HTML & CSS',
      'PHP',
      'MySQL'],    
    whoWeAre: [
    "One of our company goals has always been to create a workplace where developers can quickly grow their professional careers and use all of their skills to create innovative products, software, apps and websites. We've come really close because we aren't growing the team with 'lone wolves', but developers who want to learn something new, who want to share that knowledge with others and who are ready to jump into that problem-solving mode whenever they encounter any kind of challenge. And, of course, have fun while they're doing it!",
    "Right now, we have 31 members in our Development department. That's 31 amazing minds who can look at a project from countless sides to find the right way to deliver the best result. And if their primary stack of PHP with Symfony, MySQL and JavaScript aren't enough to crack the issue, they'll learn a new language & use new tech - anything that'll make their job easier and themselves more proficient.",
    "Here's a bit of the atmosphere you'll experience if you apply and join our team."
    ],
    requirements: [
      "At least 2 years of work experience in the field of web development",
      "Excellent knowledge of German (C1) and English language (B2), both written and spoken",
      "Excellent knowledge of PHP (OOP) and MySQL",
      "Good knowledge of Linux",
      "Good knowledge of git",
      "Basic knowledge of Javascript",
      "Good communication skills",
      "A team player attitude",
      "Good self-organisation & researching ability"
    ],
    extraPoints: [
      "Experience with the Symfony framework",
      "Experience with client-side or server-side javascript",
      "Experience with testing your code",
      "Experience with code reviews",
      "Experience with the git workflow",
      "Experience with using APIs and 3rd party integrations"
    ],
    willDo: [
      "Plan, structure and implement applications, websites, APIs, databases, etc.",
      "Develop medium-sized and large web-based projects",
      "Give your input and actively participate in various brainstormings",
      "Maintain active applications",
      "Define daily responsibilities and tasks with Project Managers and team members",
      "Collaborate with the members of the Quality Assurance team",
      "Work and experiment with trending technologies"
    ],
    offers: [
      "Awesome team buildings, dog-friendly office, in-office gym, rec room and game room",
      "Lots of internal educations from your colleagues & external educations from industry experts",
      "Servers you can crash for “research purposes” (games & stuff)",
      "Library filled with more industry-related books than you could ever read",
      "Monthly one-on-one meetings with a team leader and structured biannual meetings about personal development",
      " “Time In” counseling sessions with team psychologist about personal motivation, work-life balance, satisfaction & performance (optional & available for all)",
      "Working hours (flexible)",
      "A Macbook and a smartphone",
      "Parking spaces for rent in the office building garage and secure storage for bikes"
    ],
    overview: {
      "Total applicants" : 12,
      "Rejected": 4,
      "Pending Applicants": 8,
      "Accepted": 0
    }
  };
const overview = {
      "Total applicants" : 12,
      "Rejected": 4,
      "Pending Applicants": 8,
      "Accepted": 0
    }

function OppoInfoStep() {
  const supportChatProps = {
    messages: supportChatMessages1,
    questionPlaceholder: 'e.g. How to Edit Section?'
  };

  const [container, setContainer] = useState(null);
  const bottomPanelRef = useCallback(node=>{
    if(node!==null) {
      setContainer(node);
    }
  }, []);

  return (
    <PageWrapper
      title="Review & Publish"
      leftPanel={<OppoInfoForm6 {...opportunityData} bottomPanelRef={container}/>}
      rightPanel={(
        <Box mt="30px">
          <OverViewCard {...overview} />
          <SupportChat {...supportChatProps} />
          
        </Box>
      )}
      bottomPanel={<div ref={bottomPanelRef}/>}
    />
  )
}

export default OppoInfoStep;
