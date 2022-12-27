import "./Button.css";

interface ButtonProps {
  title: string;
  action: () => void;
}

export const Button = ({ title, action }: ButtonProps) => (
  <button onClick={action}>{title}</button>
);
