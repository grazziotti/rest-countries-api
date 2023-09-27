import { useEffect, useState } from "react";
import { Container } from "./styles";
import { ArrowUp } from "lucide-react";

const ScrollToTopBtn = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Container onClick={scrollToTop} className={showButton ? "animate" : ""}>
      <ArrowUp />
    </Container>
  );
};

export default ScrollToTopBtn;
