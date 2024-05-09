import "./App.css";
import Alert from "./components/UI/Alert/Alert";

import {
  AlertCircle,
  AlertTriangle,
  // BellRing,
  CheckCircle,
  Info,
} from "lucide-react";

interface AlertConfig {
  icon: React.ReactNode;
  className: string;
  title: string;
  description: string;
}

const alertConfigs: AlertConfig[] = [
  {
    icon: <CheckCircle />,
    className: "alert-success",
    title: "Success!",
    description:
      "The operation was completed successfully. All changes have been saved and applied.",
  },
  {
    icon: <AlertCircle />,
    className: "alert-danger",
    title: "Error!",
    description:
      "An unexpected error occurred while processing your request. Please try again later.",
  },
  {
    icon: <AlertTriangle />,
    className: "alert-warning",
    title: "Warning!",
    description:
      "This action cannot be undone. Proceed with caution. Are you sure you want to continue?",
  },
  {
    icon: <Info />,
    className: "alert-info",
    title: "Info",
    description:
      "This is an informational message to provide you with important updates. Please read carefully.",
  },
];

function App() {
  return (
    <div className="container">
      {alertConfigs.map((config, index) => (
        <Alert
          key={index}
          icon={config.icon}
          className={config.className}
          title={config.title}
          desc={config.description}
        />
      ))}
    </div>
  );
}

export default App;
