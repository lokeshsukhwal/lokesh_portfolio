import React, { useState, useEffect } from "react";

const roles = [
  "Enterprise Java Architect",
  "Microservices & Cloud Expert",
  "Backend Systems Engineer",
  "Full-Stack Solution Developer",
  "High-Performance Systems Builder",
  "DevOps & Infrastructure Specialist",
  "RESTful API Specialist",
  "Database & Query Optimization Expert",
];

const TypingIntro = ({ className }) => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, roleIndex, isDeleting, speed]);

  return (
    <div className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingIntro;
