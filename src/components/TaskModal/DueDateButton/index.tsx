import { RiCalendarCheckLine } from "react-icons/ri";
import { ButtonTask } from "../ButtonTask";
import { useState } from "react";
import styled from "styled-components";
import { useGlobal } from "../../../context/GlobalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


interface DueDateButtonProps {
    dateSelected: string | undefined;
    setDateSelected: (date: string) => void;
}

export const DueDateButton = (props: DueDateButtonProps) => {
    const { setDateSelected, dateSelected } = props;

    const { theme } = useGlobal()
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [startDate, setStartDate] = useState(new Date());


 
    
    

    const handleButton = () => {
        setIsCalendarOpen(!isCalendarOpen)
    }

    const handleOnChange = (date: Date) => {
        setStartDate(date)
        setDateSelected(date.toISOString())
        setIsCalendarOpen(false)
        
    }

    return (
        <div>
            <ButtonTask icon={RiCalendarCheckLine} text={dateSelected!== null ? `${moment(dateSelected).format("MMM. D YYYY")}` : "Due date"} visibleImg={false} visibleIcon={true} onClick={handleButton} />

            {isCalendarOpen && (

                <StyledEstimateOptions theme={theme} open={isCalendarOpen}>

                    <DatePicker
                        
                        open={isCalendarOpen}
                        selected={startDate} 
                        onChange={(date: Date) => {
                            handleOnChange(date)
                          }}
                        inline
                    />

                </StyledEstimateOptions >
            )}
        </div>
    )
}

const StyledEstimateOptions = styled.div<{ open: boolean }>`
    position: absolute;
    margin-top: 5px;
    width: auto;
    background-color: ${(props) => props.theme.colorGrayLight};
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colorGray};
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colorWhite};

   

    .react-datepicker__header {
    background: ${(props) => props.theme.colorBg};
    
    }

    .react-datepicker__current-month {
    color: ${(props) => props.theme.colorWhite};
    }

    .react-datepicker__day-name {
    color: ${(props) => props.theme.colorWhite};
    }

    .react-datepicker__month-container {
    border-radius: 4px;
    background-color: ${(props) => props.theme.colorBg};
    }

    .react-datepicker__day {
    border-radius: 2px;
    color: ${(props) => props.theme.colorWhite};
    border: 1px solid transparent;
   
    &:hover {
      border-radius: 2px;
      background-color: ${(props) => props.theme.colorRedPrimary};
       }

    }

    .react-datepicker__day--today {
    background: ${(props) => props.theme.colorGray};
    }

    .react-datepicker__day--selected {
    border-radius: 2px;
      background-color: transparent;
      border: 1px solid ${(props) => props.theme.colorRedPrimary};  
    }

    .react-datepicker__day--outside-month {
    color: ${(props) => props.theme.colorGray};
    }



   


`

