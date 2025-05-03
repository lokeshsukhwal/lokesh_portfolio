import React, { useState, useEffect, useRef } from "react";

const titles = [
  { text: "Java Developer 👨‍💻", color: "from-purple-500 to-pink-500" },
  { text: "Full Stack Engineer ⚙️", color: "from-blue-500 to-green-500" },
  { text: "Backend Specialist 🔥", color: "from-yellow-500 to-red-500" },
  { text: "Cloud Enthusiast ☁️", color: "from-pink-500 to-red-500" },
];

const TypingIntro = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);
  const audioRef = useRef(null);

  useEffect(() => {
    const fullText = titles[currentTitle].text;

    const handleTyping = () => {
      setDisplayText((prev) => {
        let updatedText;

        if (isDeleting) {
          updatedText = fullText.substring(0, prev.length - 1);
        } else {
          updatedText = fullText.substring(0, prev.length + 1);

          // Play typing sound only when adding characters
          if (audioRef.current && prev.length < fullText.length) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }

        return updatedText;
      });

      // Adjust speed and manage state transitions
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }

      setSpeed(isDeleting ? 50 : 120);
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle, speed]);

  return (
    <>
      <h2
        className={`text-5xl md:text-6xl lg:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${titles[currentTitle].color} mb-6`}
      >
        {displayText}
        <span className="animate-blink">|</span>
      </h2>
      {/* <audio ref={audioRef} src="/sounds/typing.mp3" preload="auto" /> */}
    </>
  );
};

export default TypingIntro;
