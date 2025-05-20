import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Metric {
  label: string;
  value: string;
  description: string;
}

interface CaseStudy {
  title: string;
  description: string;
}

interface ContactInfo {
  email: string;
  phone: string;
  website: string;
}

interface Industry {
  name: string;
  icon: string;
  details: string[];
  services: string[];
  heroImage?: string;
  metrics: Metric[];
  caseStudies: CaseStudy[];
  contactInfo: ContactInfo;
}

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent {
  leftColumnIndustries: Industry[] = [
    {
      name: 'Banking',
      icon: 'fa-solid fa-dollar-sign',
      details: ['Banking API Guide - Build secure financial apps.', 'Fraud Detection Tools - Use AI to enhance security.', 'Regulatory Compliance Resources - Stay updated.'],
      services: ['Online Banking Solutions', 'Fraud Detection Systems', 'Compliance Consulting'],
      heroImage: 'https://c8.alamy.com/comp/R9HYHA/young-man-looking-at-the-reserve-bank-of-india-building-at-dalhousie-area-of-kolkata-with-view-of-early-morning-city-road-R9HYHA.jpg',
      metrics: [
        { label: 'Market Size', value: '$8.5T', description: 'Global banking revenue in 2024.' },
        { label: 'Growth Rate', value: '4.2%', description: 'Annual growth projection.' }
      ],
      caseStudies: [
        { title: 'Digital Banking Transformation', description: 'Implemented a mobile-first banking platform, increasing customer engagement by 30%.' },
        { title: 'Fraud Detection AI', description: 'Reduced fraudulent transactions by 25% using AI-driven analytics.' }
      ],
      contactInfo: { email: 'banking@xai.com', phone: '+1-800-555-1234', website: 'https://xai.com/banking' }
    },
    {
      name: 'Communications, Media, and Information Services',
      icon: 'fa-solid fa-wifi',
      details: ['5G Integration Guide - Optimize network performance.', 'Media Streaming Solutions - Enhance user experience.', 'Data Privacy Standards - Protect user data.'],
      services: ['5G Network Deployment', 'Streaming Platform Development', 'Data Privacy Audits'],
      heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a modern communication network setup
      metrics: [
        { label: '5G Adoption', value: '2.1B', description: 'Global 5G connections in 2025.' },
        { label: 'Streaming Revenue', value: '$120B', description: 'Global streaming market in 2024.' }
      ],
      caseStudies: [
        { title: '5G Network Rollout', description: 'Deployed 5G infrastructure, improving network speeds by 50%.' },
        { title: 'Streaming Platform Upgrade', description: 'Enhanced UX for a streaming service, boosting retention by 15%.' }
      ],
      contactInfo: { email: 'comms@xai.com', phone: '+1-800-555-5678', website: 'https://xai.com/comms' }
    },
    {
      name: 'Education',
      icon: 'fa-solid fa-graduation-cap',
      details: ['E-Learning Platforms - Create engaging courses.', 'AI Tutoring Tools - Personalize learning.', 'Student Data Analytics - Improve outcomes.'],
      services: ['E-Learning Development', 'AI Tutoring Integration', 'Educational Analytics'],
      heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a classroom with students using technology
      metrics: [
        { label: 'Online Learners', value: '220M', description: 'Global e-learning users in 2024.' },
        { label: 'Market Growth', value: '15%', description: 'Annual e-learning market growth.' }
      ],
      caseStudies: [
        { title: 'E-Learning Platform', description: 'Built a scalable platform, serving 100,000+ students.' },
        { title: 'AI Tutoring', description: 'Increased student performance by 20% with personalized AI tutors.' }
      ],
      contactInfo: { email: 'education@xai.com', phone: '+1-800-555-9012', website: 'https://xai.com/education' }
    },
    {
      name: 'Healthcare',
      icon: 'fa-solid fa-shield-alt',
      details: ['Telemedicine Solutions - Connect with patients.', 'Health Data Interoperability - Share data securely.', 'AI Diagnostics Tools - Improve accuracy.'],
      services: ['Telemedicine Platforms', 'Health Data Integration', 'AI Diagnostic Systems'],
      heroImage: 'https://images.unsplash.com/photo-1576091160550-2173fd1c1618?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a doctor using telemedicine technology
      metrics: [
        { label: 'Telehealth Users', value: '80M', description: 'Global telehealth users in 2024.' },
        { label: 'AI Diagnostics', value: '90%', description: 'Accuracy in AI-driven diagnostics.' }
      ],
      caseStudies: [
        { title: 'Telemedicine Expansion', description: 'Scaled telemedicine services, reaching 50,000+ patients.' },
        { title: 'AI Diagnostics', description: 'Improved diagnostic accuracy by 15% with AI tools.' }
      ],
      contactInfo: { email: 'healthcare@xai.com', phone: '+1-800-555-3456', website: 'https://xai.com/healthcare' }
    },
    {
      name: 'Insurance',
      icon: 'fa-solid fa-dollar-sign',
      details: ['Claims Automation Tools - Streamline processes.', 'Risk Assessment Models - Leverage AI.', 'Customer Support Chatbots - Enhance service.'],
      services: ['Claims Automation', 'Risk Analysis', 'Chatbot Support'],
      heroImage: 'https://images.unsplash.com/photo-1556742521-9713bf272865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of insurance documents and a calculator
      metrics: [
        { label: 'Claims Processed', value: '1.2M', description: 'Automated claims processed in 2024.' },
        { label: 'Customer Satisfaction', value: '85%', description: 'Post-chatbot implementation.' }
      ],
      caseStudies: [
        { title: 'Claims Automation', description: 'Reduced claims processing time by 40%.' },
        { title: 'AI Risk Models', description: 'Improved risk prediction accuracy by 30%.' }
      ],
      contactInfo: { email: 'insurance@xai.com', phone: '+1-800-555-7890', website: 'https://xai.com/insurance' }
    },
    {
      name: 'Manufacturing',
      icon: 'fa-solid fa-tools',
      details: ['IoT Integration Guide - Optimize production.', 'Supply Chain Analytics - Improve efficiency.', 'Predictive Maintenance Tools - Reduce downtime.'],
      services: ['IoT Solutions', 'Supply Chain Optimization', 'Predictive Maintenance'],
      heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a modern manufacturing facility
      metrics: [
        { label: 'IoT Devices', value: '31B', description: 'Global IoT devices in 2025.' },
        { label: 'Downtime Reduction', value: '20%', description: 'With predictive maintenance.' }
      ],
      caseStudies: [
        { title: 'IoT Production', description: 'Increased production efficiency by 25% with IoT.' },
        { title: 'Supply Chain Analytics', description: 'Reduced logistics costs by 15%.' }
      ],
      contactInfo: { email: 'manufacturing@xai.com', phone: '+1-800-555-2345', website: 'https://xai.com/manufacturing' }
    },
    {
      name: 'Retail',
      icon: 'fa-solid fa-shopping-cart',
      details: ['E-Commerce Platforms - Build online stores.', 'Customer Behavior Analytics - Boost sales.', 'Inventory Management Tools - Streamline operations.'],
      services: ['E-Commerce Development', 'Customer Analytics', 'Inventory Management'],
      heroImage: 'https://images.unsplash.com/photo-1560253023-3ec5d3a53f72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a retail store with digital displays
      metrics: [
        { label: 'E-Commerce Sales', value: '$5.7T', description: 'Global e-commerce market in 2024.' },
        { label: 'Conversion Rate', value: '10%', description: 'Improvement with analytics.' }
      ],
      caseStudies: [
        { title: 'E-Commerce Platform', description: 'Launched a store, increasing sales by 35%.' },
        { title: 'Customer Analytics', description: 'Boosted conversions by 12% with insights.' }
      ],
      contactInfo: { email: 'retail@xai.com', phone: '+1-800-555-6789', website: 'https://xai.com/retail' }
    }
  ];

  rightColumnIndustries: Industry[] = [
    {
      name: 'Capital Markets',
      icon: 'fa-solid fa-chart-line',
      details: ['Trading Algorithms - Optimize performance.', 'Market Data Analytics - Gain insights.', 'Regulatory Reporting Tools - Ensure compliance.'],
      services: ['Algorithmic Trading', 'Market Data Analysis', 'Regulatory Reporting'],
      heroImage: 'https://images.unsplash.com/photo-1590283603385-8e1f1a485219?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a stock market trading floor
      metrics: [
        { label: 'Trading Volume', value: '$2.3T', description: 'Daily global trading in 2024.' },
        { label: 'Compliance Rate', value: '98%', description: 'With automated reporting.' }
      ],
      caseStudies: [
        { title: 'Algorithmic Trading', description: 'Improved trading profits by 18%.' },
        { title: 'Market Analytics', description: 'Enhanced market predictions by 22%.' }
      ],
      contactInfo: { email: 'capitalmarkets@xai.com', phone: '+1-800-555-0123', website: 'https://xai.com/capitalmarkets' }
    },
    {
      name: 'Consumer Goods and Distribution',
      icon: 'fa-solid fa-shopping-cart',
      details: ['Supply Chain Optimization - Reduce costs.', 'Consumer Trend Analysis - Stay ahead.', 'Distribution Logistics Tools - Improve efficiency.'],
      services: ['Supply Chain Management', 'Trend Analysis', 'Logistics Optimization'],
      heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a warehouse with goods distribution
      metrics: [
        { label: 'Supply Chain Savings', value: '$50B', description: 'Global savings in 2024.' },
        { label: 'Trend Accuracy', value: '88%', description: 'With AI-driven analysis.' }
      ],
      caseStudies: [
        { title: 'Supply Chain Optimization', description: 'Cut logistics costs by 20%.' },
        { title: 'Trend Analysis', description: 'Predicted trends with 90% accuracy.' }
      ],
      contactInfo: { email: 'consumergoods@xai.com', phone: '+1-800-555-4567', website: 'https://xai.com/consumergoods' }
    },
    {
      name: 'Energy, Resources, and Utilities',
      icon: 'fa-solid fa-bolt',
      details: ['Smart Grid Solutions - Enhance efficiency.', 'Renewable Energy Analytics - Optimize usage.', 'Resource Management Tools - Reduce waste.'],
      services: ['Smart Grid Implementation', 'Renewable Energy Solutions', 'Resource Management'],
      heroImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of wind turbines for renewable energy
      metrics: [
        { label: 'Renewable Energy', value: '30%', description: 'Global energy share in 2024.' },
        { label: 'Efficiency Gain', value: '15%', description: 'With smart grids.' }
      ],
      caseStudies: [
        { title: 'Smart Grid Deployment', description: 'Improved energy efficiency by 18%.' },
        { title: 'Renewable Analytics', description: 'Optimized solar output by 25%.' }
      ],
      contactInfo: { email: 'energy@xai.com', phone: '+1-800-555-8901', website: 'https://xai.com/energy' }
    },
    {
      name: 'High Tech',
      icon: 'fa-solid fa-microchip',
      details: ['<a href="https://x.ai/api" target="_blank">xAI API Documentation</a> - Integrate AI into your software projects.', '<a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">Bootstrap Documentation</a> - Build responsive web interfaces.', '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN JavaScript Guide</a> - Enhance your web development skills.'],
      services: ['AI Integration', 'Web Development', 'Software Training'],
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a tech circuit board
      metrics: [
        { label: 'AI Adoption', value: '65%', description: 'Tech companies using AI in 2024.' },
        { label: 'Development Time', value: '-30%', description: 'Reduction with Bootstrap.' }
      ],
      caseStudies: [
        { title: 'AI Integration', description: 'Enhanced software with xAI API, improving UX by 20%.' },
        { title: 'Web Development', description: 'Built responsive site, reducing load time by 40%.' }
      ],
      contactInfo: { email: 'hightech@xai.com', phone: '+1-800-555-2346', website: 'https://xai.com/hightech' }
    },
    {
      name: 'Life Sciences',
      icon: 'fa-solid fa-heartbeat',
      details: ['Genomics Analysis Tools - Accelerate research.', 'Clinical Trial Platforms - Streamline studies.', 'AI Drug Discovery - Innovate faster.'],
      services: ['Genomics Research', 'Clinical Trial Management', 'Drug Discovery'],
      heroImage: 'https://images.unsplash.com/photo-1576091160399-1e6f21f8a206?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a scientist in a lab
      metrics: [
        { label: 'Drug Discovery Time', value: '-25%', description: 'With AI tools.' },
        { label: 'Trial Efficiency', value: '40%', description: 'Improvement in 2024.' }
      ],
      caseStudies: [
        { title: 'Genomics Research', description: 'Accelerated gene analysis by 30%.' },
        { title: 'AI Drug Discovery', description: 'Identified new drug candidates 50% faster.' }
      ],
      contactInfo: { email: 'lifesciences@xai.com', phone: '+1-800-555-6780', website: 'https://xai.com/lifesciences' }
    },
    {
      name: 'Public Services',
      icon: 'fa-solid fa-thumbs-up',
      details: ['Citizen Engagement Platforms - Improve communication.', 'Public Data Analytics - Enhance decision-making.', 'Smart City Solutions - Build sustainable cities.'],
      services: ['Citizen Engagement', 'Data Analytics', 'Smart City Development'],
      heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of a smart city skyline
      metrics: [
        { label: 'Citizen Reach', value: '10M', description: 'Engaged via platforms in 2024.' },
        { label: 'Smart Cities', value: '200', description: 'Global smart city projects.' }
      ],
      caseStudies: [
        { title: 'Citizen Engagement', description: 'Increased public participation by 35%.' },
        { title: 'Smart City', description: 'Reduced urban emissions by 10%.' }
      ],
      contactInfo: { email: 'publicservices@xai.com', phone: '+1-800-555-1235', website: 'https://xai.com/publicservices' }
    },
    {
      name: 'Travel and Logistics',
      icon: 'fa-solid fa-plane',
      details: ['Route Optimization Tools - Save time and costs.', 'Travel Booking Platforms - Enhance user experience.', 'Logistics Tracking Systems - Improve transparency.'],
      services: ['Route Optimization', 'Booking Systems', 'Logistics Tracking'],
      heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80', // Image of an airport with a plane
      metrics: [
        { label: 'Travel Bookings', value: '$1.2T', description: 'Global market in 2024.' },
        { label: 'Logistics Savings', value: '12%', description: 'With route optimization.' }
      ],
      caseStudies: [
        { title: 'Route Optimization', description: 'Reduced delivery times by 15%.' },
        { title: 'Booking Platform', description: 'Improved booking conversions by 20%.' }
      ],
      contactInfo: { email: 'travel@xai.com', phone: '+1-800-555-5670', website: 'https://xai.com/travel' }
    }
  ];

  constructor(private router: Router) {}

  selectIndustry(industry: Industry): void {
    this.router.navigate(['/industry-info', industry.name], { state: { industry } });
  }
}