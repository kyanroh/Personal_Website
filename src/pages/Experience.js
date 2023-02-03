import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug 2022 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Google Student Developer Club
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Product Manager
          </h4>
          <ul>Worked closely with key stakeholders from FoodBank to understand their requirements for Virtual Supermarket a platform for donors to purchase the items they wish to donate.</ul>
          <ul>Responsible for product planning, delivery, and marketing throughout the product lifecycle.</ul>
          <ul>Conducted A/B testing on 3 variants of platform design to determine the design that achieved the most web traffic.</ul>
        </VerticalTimelineElement>
      
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2022 - Aug 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Zuellig Pharma Therapeutics
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Commercial Excellence Data Analyst Intern
          </h4>
          <ul>Designed and executed data preparation activities such as mapping and cleaning, to ensure accurate usage of existing data sources.</ul>
          <ul>Assisted in the execution of Tableau dashboards for data visualization of employee training data and translated business requirements into enhancements of the dashboards. </ul>
          <ul>Worked with the Commercial Excellence team to solve data discrepancies by using KPIs to gain insights on salesforce deployment. </ul>
          <ul>Managed internal stakeholders by analyzing data to create business review templates, generated insights on medical representatives' Share of Voice data, and presented findings to senior stakeholders.</ul>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2021 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            National University of Singapore (NUS)  
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> School of Computing, Business Analytics</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2021 - Aug 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Operations Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Sheng Wang Trading
          </h4>
          <ul>Supported and led digital marketing campaigns, performed A/B testing, and generated leads.</ul>
          <ul>Supervised a fleet of heavy vehicles and optimized company logistics.</ul>
          <ul>Reconciled bank statements for financial accuracy, executed marketing strategies, sourced for talents, and built brand awareness through managing social media channels.</ul>
          
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Eunoia Junior College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Singapore</h4>
          <p>4 Distinctions in the Singapore-Cambridge General Certificate of Education Advanced Level </p>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="resume">
        <p>Take a look at my resume! </p>
        <button className="resumeButton" onClick={() => {window.open("ryanResume.pdf")}}>Resume</button>
      </div>
      
    </div>

    
  );
}

export default Experience;
