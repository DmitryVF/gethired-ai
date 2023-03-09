import React from 'react';
import Box from '@material-ui/core/Box';
import OpportunityCard from './opportunityCard';
import PageWrapper from '../../../components/common/pageWrapper';
import SupportCard from '../../../components/common/supportCard';
import SummaryCard from './summaryCard';
import OpportunityHeader from './opportunityHeader';


function Opportunity() {
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

  return (

    <React.Fragment>
    <OpportunityHeader/>
    <PageWrapper
      //title="Opportunity Information"
      leftPanel={<OpportunityCard {...opportunityData} />}
      rightPanel={(
        <Box  width="316px">
          <SummaryCard {...opportunityData.overview}/>
          <SupportCard />
        </Box>
      )}
    />
    </React.Fragment>
  )
}

export default Opportunity;
