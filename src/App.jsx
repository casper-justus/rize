import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Resources from './pages/Resources';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';
import Founder from './pages/Founders';
import Seminars from './pages/Seminars';
import Events from './pages/Events';
import Scholarship from './pages/Scholarship';
import Community from './pages/Community';
import Message from './pages/Message';
import LeadershipToolkits from './pages/LeadershipToolkits';
import ResearchPapers from './pages/ResearchPapers';
import TrainingMaterials from './pages/TrainingMaterials';
import CaseStudies from './pages/CaseStudies';
import PolicyBriefs from './pages/PolicyBriefs';
import WebinarArchives from './pages/WebinarArchives';
import AdminResources from './pages/AdminResources';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Founders" element={<Founder />} />
          <Route path="/Seminars" element={<Seminars />} /> 
          <Route path="/Events" element={<Events />} />
          <Route path="/Scholarship" element={<Scholarship />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Message" element={<Message />} />
          <Route path="/leadership-toolkits" element={<LeadershipToolkits />} />
         <Route path="/research-papers" element={<ResearchPapers />} />
         <Route path="/training-materials" element={<TrainingMaterials />} />
         <Route path="/case-studies" element={<CaseStudies />} />
         <Route path="/policy-briefs" element={<PolicyBriefs />} />
         <Route path="/webinar-archives" element={<WebinarArchives />} />
         <Route path="/AdminResources" element={<AdminResources />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}