import { ReactNode } from "react";
import { BsXLg } from "react-icons/bs";
import styled from "styled-components";
// import styles from "./alert.module.css";

interface UAlertProps {
    children: ReactNode;
    onClose: () => void;
}

const AlertWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;
    border-radius: 6px;
    background-color: rgba(0, 71, 171, 0.8);
`;
const AlertTitle = styled.span`
    color: white;
    font-size: 14px;
`;
const AlertButton = styled.button`
    padding: 4px;
    width: 24px;
    height: 24px;
    color: white;
`;

export const UAlert = ({ children, onClose }: UAlertProps) => {
    return (
        <AlertWrapper>
            <AlertTitle>{children}</AlertTitle>
            <AlertButton onClick={onClose}>
                <BsXLg />
            </AlertButton>
        </AlertWrapper>
    );
};
