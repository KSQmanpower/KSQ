import React, { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "5%",
          border: "1px solid #051d41",
          borderRadius: "0.5rem",
          overflow: "hidden",
          background: "#512573",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="accordionTabs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "1rem 5rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            fontSize: "150%",
            background: "#033794",
            color: "white",
            border: "none",
          }}
        >
          <span style={{ fontWeight: "600" }}>{title}</span>
          <span
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0)",
              transition: "transform 0.3s",
              marginLeft: "0.5rem",
            }}
          >
            +
          </span>
        </button>
        <div
          style={{
            maxHeight: isOpen ? "1000px" : "0",
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          <div style={{ padding: "1.5rem", background: "white" }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const CarOptionsSection = () => {
  return (
    <div
      style={{
        maxWidth: "64rem",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "0.75rem",
      }}
    >
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Helpers in Singapore, that you can trust
      </h1>

      <div>
        <AccordionItem title="Expertise and Experience">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Our experience:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              KSQ Manpower brings years of industry experience to the table
            </li>
            <li>
              offering unparalleled expertise in matching the right talent with
              the right opportunities
            </li>
            <li>
              Our team of seasoned recruiters understands the nuances of various
              industries and job markets, ensuring that we can provide tailored
              staffing solutions for your unique business needs
            </li>
            <li>
              With a track record of successful placements across diverse
              sectors, we have built a reputation for reliability and efficiency
              in the competitive world of recruitment.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Ongoing Support and Flexibility">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Ongoing Support and Flexibility
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              Choosing KSQ Manpower means gaining a partner committed to your
              long-term success.
            </li>
            <li>
              We offer flexible staffing solutions, from temporary and contract
              workers to permanent placements, adapting to your changing
              workforce needs
            </li>
            <li>
              Our support doesn't end with placement; we provide ongoing
              assistance to both employers and employees, ensuring smooth
              transitions and addressing any concerns that may arise. With KSQ
              Manpower, you're not just filling positions – you're building a
              resilient, high-performing workforce tailored to your
              organization's goals and culture.
            </li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Comprehensive Candidate Screening">
          <h4 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
            Key Benefits:
          </h4>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              At KSQ Manpower, we pride ourselves on our rigorous candidate
              screening process. We go beyond just matching skills on paper
              <li>
                we delve deep into each candidate's background, experience, and
                cultural fit.
              </li>
              <li>
                Our thorough vetting includes in-depth interviews, skill
                assessments, and reference checks, ensuring that only the most
                qualified and suitable candidates are presented to our clients.
              </li>
              <li>
                This meticulous approach saves you time and resources in your
                hiring process, significantly reducing the risk of mismatches
                and turnover.
              </li>
            </li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;
