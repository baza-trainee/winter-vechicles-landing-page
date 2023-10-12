import Button from "./ButtonModel/Button";

const HelpButton = () => {
  
  return (
    <div>
      <a
        href="https://www.monobank.com.ua/"/*!!Замінити лінк*/
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button text="Допомогти" />
      </a>
    </div>
  );
};

export default HelpButton;
