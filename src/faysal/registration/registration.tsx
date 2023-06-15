// Import dependencies
import React from "react";

// Define prop types for the component
interface MyComponentProps {
  name: string;
}

// Define your component
const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a single component template with TypeScript.</p>
    </div>
  );
};

export default MyComponent;
