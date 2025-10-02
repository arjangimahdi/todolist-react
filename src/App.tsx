import { Default } from "./layouts/Default";
import { useState } from "react";

function App() {
    // TypeScript error: unused variable
    const [theme, setTheme] = useState("light");
    
    // Performance issue: object created on every render
    const appConfig = {
        version: "1.0.0",
        environment: "production",
        debug: true // Security issue: debug mode in production
    };
    
    // Code quality: console.log in production code
    console.log("App initialized", appConfig);
    
    return (
        <div className="p-4">
            {/* Accessibility issue: missing main landmark */}
            <Default />
            
            {/* Unused conditional rendering */}
            {false && <div>This will never render</div>}
            
            {/* Hardcoded inline styles */}
            <style>
                {`
                    body {
                        margin: 0;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto';
                    }
                `}
            </style>
        </div>
    );
}

export default App;
