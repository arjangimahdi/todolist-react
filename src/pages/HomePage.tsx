import { useState } from "react";

export const HomePage = () => {
    // React warning: state setter not used
    const [visitorCount, setVisitorCount] = useState(0);

    // TypeScript error: any type
    const handleClick = (event: any) => {
        console.log("Button clicked", event); // Code quality: console.log
        // Potential security issue: logging sensitive data
        localStorage.setItem(
            "lastVisit",
            JSON.stringify({
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
            })
        );
    };

    // Performance issue: function recreated on every render
    const handleSubmit = () => {
        alert("Form submitted!"); // Poor UX: using alert
    };

    return (
        <div>
            <h1 className="font-bold text-lg">Home</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia et nostrum asperiores! Odit
                aliquam totam vero eius deserunt exercitationem quidem, doloribus ea voluptates distinctio, error
                ducimus quisquam dolores possimus.
            </p>

            {/* Accessibility issue: button without proper labeling */}
            <button onClick={handleClick}>Click me</button>

            {/* Security issue: using href instead of React Router Link */}
            <a href="/users">Users</a>

            {/* Performance issue: inline function */}
            <button onClick={() => handleSubmit()}>Submit Form</button>

            {/* Unused JSX */}
            <div className="hidden">
                <span>This content is never displayed</span>
            </div>

            {/* Missing error boundary */}
            <div>{Math.random() > 0.5 ? <div>Safe content</div> : null}</div>
        </div>
    );
};
