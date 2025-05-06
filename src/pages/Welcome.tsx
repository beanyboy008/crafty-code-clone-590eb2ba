import React from 'react';
import Logo from '../components/Logo';
import Breadcrumb from '../components/Breadcrumb';
import EmailButton from '../components/EmailButton';
const Welcome: React.FC = () => {
  const breadcrumbItems = [{
    label: 'The Rundown AI',
    path: '/'
  }, {
    label: 'Pages',
    path: '/pages'
  }, {
    label: 'Welcome'
  }];
  return <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />
        
        <div className="flex flex-col items-center mt-8 mb-6">
          <Logo />
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to The Rundown AI </h1>
          <p className="text-lg font-medium">You're officially an early adopter!</p>
        </div>
        
        <div className="space-y-6 text-gray-800">
          <p className="text-lg">
            Our expert research team spends every day learning what's new in AI and filters the most 
            important news into a short 5-minute read that we send to your inbox every weekday 
            morning.
          </p>
          
          <p className="text-lg">By simply reading our emails, you'll be able to:</p>
          
          <ul className="list-disc pl-8 space-y-2 text-lg">
            <li>Keep up with the rapid pace of AI</li>
            <li>Learn how to use AI to automate your work</li>
            <li>Discover the newest AI tools and job opportunities</li>
            <li>Gain expert insights on why the latest in AI actually matters</li>
          </ul>
          
          <p className="text-lg">
            We also collect the top real-world AI use cases we've found across the <span className="font-bold">1,000,000+</span> AI early 
            adopters who read our newsletter and break them down with daily step-by-step tutorials 
            and workshops in our AI University.
          </p>
          
          <p className="text-lg">
            If you're ever interested in checking it out — you can learn more and try it for free{' '}
            <a href="#" className="text-blue-500 hover:underline">here</a>.
          </p>
          
          <p className="text-lg">
            If not, no worries — you're already subscribed to our newsletter, and you should expect us 
            in your inbox bright and early tomorrow.
          </p>
          
          <p className="text-lg">
            But before we get into the rundowns, we need a quick favor…
          </p>
          
          <p className="text-lg font-bold">
            Check your inbox for our welcome email and confirm your subscription.
          </p>
          
          <p className="text-lg mb-8">
            We've just sent you important instructions to make sure you get our updates.
          </p>
          
          <div className="flex justify-center mt-8">
            <EmailButton label="Take me to Gmail" />
          </div>
        </div>
      </div>
    </div>;
};
export default Welcome;