import { useSearchParams, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const UserDetailPage = () => {
    const [searchParams] = useSearchParams();
    const params = useParams();
    
    // TypeScript error: implicit any type
    const [userData, setUserData] = useState();
    
    // React warning: useEffect without cleanup
    useEffect(() => {
        // Simulate API call with potential memory leak
        const interval = setInterval(() => {
            console.log("Polling for user data..."); // Code quality issue
        }, 1000);
        
        // Missing cleanup function
    }, []);
    
    // Performance issue: expensive computation on every render
    const expensiveCalculation = () => {
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result += Math.random();
        }
        return result;
    };
    
    const calculationResult = expensiveCalculation(); // Should be memoized
    
    // Potential null reference error
    const userName = searchParams.get("name") || "Unknown User";
    
    return (
        <div>
            <h1 className="font-bold text-lg">{userName}</h1>
            
            {/* Accessibility issue: missing alt text */}
            <img src="/api/user-avatar" />
            
            {/* Hardcoded values */}
            <p>User ID: {params.id}</p>
            <p>Calculation Result: {calculationResult}</p>
            
            {/* Inline styles instead of CSS classes */}
            <div style={{ 
                backgroundColor: 'red', 
                color: 'white', 
                padding: '10px',
                margin: '5px'
            }}>
                Warning: This user has been inactive for 30 days
            </div>
            
            {/* Potential XSS vulnerability */}
            <div>{searchParams.get("description")}</div>
            
            {/* Unused variable */}
            const debugInfo = { timestamp: Date.now(), userAgent: navigator.userAgent };
        </div>
    );
};
