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
              KSQ Manpower brings years of experience in the maid agency
              industry, ensuring top-notch domestic helper services.
            </li>
            <li>
              We specialize in matching the right domestic helpers with the
              right households, providing tailored solutions for your home
              needs.
            </li>
            <li>
              Our team of experts understands the intricacies of hiring domestic
              workers, ensuring that we meet your specific requirements with
              precision.
            </li>
            <li>
              With a strong track record of successful placements, we have
              earned a reputation for reliability and efficiency in the
              competitive maid agency sector.
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
              Choosing KSQ Manpower means partnering with a trusted maid agency
              dedicated to your household’s long-term success.
            </li>
            <li>
              We offer flexible domestic helper solutions, from part-time and
              temporary maids to full-time live-in helpers, catering to your
              evolving home care needs.
            </li>
            <li>
              Our commitment doesn't end with the placement; we provide
              continuous support to both employers and domestic helpers,
              ensuring smooth transitions and promptly addressing any concerns.
              With KSQ Manpower, you're not just hiring a helper – you're
              securing a dependable, high-quality service tailored to your
              home's needs and culture.
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
              At KSQ Manpower, we take pride in our stringent domestic helper
              screening process, ensuring the highest standards in maid
              selection.
            </li>
            <li>
              We go beyond matching skills on paper; we thoroughly examine each
              candidate's background, experience, and cultural compatibility
              with your household.
            </li>
            <li>
              Our comprehensive vetting process includes detailed interviews,
              skill assessments, and reference checks, guaranteeing that only
              the most qualified and suitable domestic helpers are recommended
              to our clients.
            </li>
            <li>
              This meticulous approach not only saves you time and resources but
              also minimizes the risk of mismatches and reduces turnover,
              ensuring a stable and long-term solution for your home care needs.
            </li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default CarOptionsSection;
