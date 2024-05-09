import { X } from "lucide-react";
import "./index.scss";
import React from "react";

interface IProps {
  className?: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const Alert = ({ className, title, icon, desc }: IProps) => {
  return (
    <div className={`${className} alert_default `}>
      <div className="alert_header">
        <div>
          {icon}
          <h4>{title}</h4>
        </div>
        <X />
      </div>
      <p className="alert__body">{desc}</p>
    </div>
  );
};

export default Alert;
