import React, { useEffect, useState } from 'react'
import { ButtonTask } from '../ButtonTask'
import {  RiPriceTag3Fill } from 'react-icons/ri'
import styled from 'styled-components'
import { useGlobal } from '../../../context/GlobalContext'


const tags = ["ANDROID", "IOS", "NODE_JS", "RAILS", "REACT"]

interface TagButtonProps {
    tagsSelected: (string | undefined)[];
    setTagsSelected: (tagsSelected: (string)[]) => void;
}

export const TagButton = (props: TagButtonProps) => {
    
  
    const { tagsSelected, setTagsSelected } = props
    const { theme } = useGlobal()
    const [isEstimateOpen, setIsEstimateOpen] = useState(false)
    const [checkedState, setCheckedState] = useState(
        tags.map((tag) => tagsSelected.includes(tag))
    );

    // console.log(tagsSelected)
    // console.log(checkedState)
    


    const handleButtonClick = () => {
        
        if (tagsSelected.length === 0) {
            const updatedCheckedState = Array(tags.length).fill(false);
            // console.log(updateTagsSelected)
            setCheckedState(updatedCheckedState);
        }
        setIsEstimateOpen(!isEstimateOpen);
    };

    const handleOnChange = (index: number) => {
        const updatedCheckedState = [...checkedState];
        updatedCheckedState[index] = !updatedCheckedState[index];
        setCheckedState(updatedCheckedState);
    };

    const updateTagsSelected = () => {
        const newTagsSelected = checkedState.map((checked, index) => {
            if (checked) {
                return tags[index]
            }
        }).filter(Boolean)
        setTagsSelected(newTagsSelected as string[])

    }

   

    
  

    useEffect(() => {
        updateTagsSelected()
    }, [checkedState])

  



    return (
        <div>
            <ButtonTask icon={RiPriceTag3Fill} text={tagsSelected.length !== 0 ? `Tags (${tagsSelected.length})` : "Label"} visibleImg={false} visibleIcon={true} onClick={handleButtonClick} />


            {isEstimateOpen && (

                <StyledEstimateOptions theme={theme} open={isEstimateOpen}>
                    <h3>Tag Title</h3>
                    <ListOptions theme={theme} >
                        {tags.map((tag, index) => (
                            <ItemOption theme={theme} key={tag} onClick={() => handleOnChange(index)}>
                                <input
                                    type="checkbox"
                                    name="tag" id={tag}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                    onClick={(e) => e.stopPropagation()}                                     
                                />
                                <label htmlFor={tag}>{tag}</label>
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
    align-items:start;
   
`;

const ItemOption = styled.div`
    display: flex;  
    gap: 0.5rem;
    padding: .25rem 1rem;
    cursor: pointer;
    width: 100%;

    &:hover {
        background-color: ${(props) => props.theme.colorGray};
    }

    label {
        font-size: ${(props) => props.theme.fontSizeSm};
    }
`