import { RiIncreaseDecreaseFill } from "react-icons/ri"
import { useGlobal } from "../../../context/GlobalContext";
import styled from "styled-components";
import { useState } from "react";
import { ButtonTask } from "../ButtonTask";



const points = { "ZERO": 0, "ONE": 1, "TWO": 2, "FOUR": 4, "EIGHT": 8 }

interface EstimateButtonProps {
    pointValue: string | null;
    setPointValue: (option: string) => void;
}

export const EstimateButton = (props: EstimateButtonProps) => {
    const { pointValue, setPointValue } = props

    const { theme } = useGlobal()
    const [isEstimateOpen, setIsEstimateOpen] = useState(false)





    const handleButtonClick = () => {
        setIsEstimateOpen(!isEstimateOpen);
    };

    const changePointValue = (key: string) => {
        setPointValue(key)


        setIsEstimateOpen(false)
    }





    return (
        <div>
            <ButtonTask icon={RiIncreaseDecreaseFill}
                text={pointValue !== null ? `${points[pointValue as keyof typeof points]} Points` : "Estimate"}
                visibleImg={false} visibleIcon={true} onClick={handleButtonClick} />

            {isEstimateOpen && (

                <StyledEstimateOptions theme={theme} open={isEstimateOpen}>
                    <h3>Estimate</h3>
                    <ListOptions theme={theme} >
                        {Object.entries(points).map(([key, value]) => (
                            <ItemOption theme={theme} key={key} onClick={() => changePointValue(key)}>
                                <RiIncreaseDecreaseFill size={24} className="text-white" />
                                {value} Points
                            </ItemOption>
                        ))}
                    </ListOptions>
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
    padding: 0.25rem 0;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colorGray};
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colorWhite};

    & > h3 {
        padding: 0rem 1rem;
        color: ${(props) => props.theme.colorGray};
        font-size: ${(props) => props.theme.fontSizeLg};
    }

`

const ListOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
   
`;

const ItemOption = styled.button`
display: flex;  
gap: 0.5rem;
padding: .25rem 1rem;

&:hover {
    background-color: ${(props) => props.theme.colorGray};
}
`