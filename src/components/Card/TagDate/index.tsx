import { RiAlarmLine } from "react-icons/ri"
import { useGlobal } from "../../../context/GlobalContext";
import styled from "styled-components";
import moment from "moment";

interface TagDateProps {
    date: string;
}

export const TagDate = (props: TagDateProps) => {
    const { date } = props
    const { theme } = useGlobal()
    const momentDate = moment(date);


    const dateFormat = moment(date).format("D MMMM, YYYY")
    const isDateBeforeToday = moment(date).isBefore(moment(), 'day');
    const isDateToday = momentDate.isSame(moment(), 'day');
    const isDateTomorrow = momentDate.isSame(moment().add(1, 'day'), 'day');
    const isDateYesterday = momentDate.isSame(moment().subtract(1, 'day'), 'day');

    let displayText = dateFormat;

    if (isDateToday) {
        displayText = 'Today';
    } else if (isDateTomorrow) {
        displayText = 'Tomorrow';
    } else if (isDateYesterday) {
        displayText = 'Yesterday';
    }




    return (
        <StyledTagDate theme={theme} className={`${isDateBeforeToday ? "overdue" : "on-time"}`}>
            <RiAlarmLine size={24} />
            {displayText}
        </StyledTagDate>
    )
}

const StyledTagDate = styled.div`
    display: flex;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    text-transform: uppercase;
    width: fit-content;
    padding: 0.25rem 1rem; 
    border-radius: 0.25rem; 
    font-size:15px;

    &.overdue {
        color: ${(props) => props.theme.colorRedPrimary};
        background-color: ${(props) => props.theme.colorRedSecondary};
    }
    &.on-time {
        color: ${(props) => props.theme.colorWhite};
        background-color: ${(props) => props.theme.colorGraySecondary};
    }
    
    `
