import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import {CheckIcon} from '@radix-ui/react-icons';

const DropButton = ({ toggleActiveStyle, FilterMenu, PositionValues }) => {

    return ( 
        <>
            <div div className="dropdwon-menu" >
                <Select.Root onValueChange={FilterMenu}>
                    <Select.Trigger className="trigger-button">
                        <Select.Value placeholder="All"/>
                    </Select.Trigger>

                    <Select.Content className="content">
                        {
                            PositionValues.map((curElem, index) => {
                                return ( <Select.Item value={curElem} className="select-item" key={index}>
                                            <Select.ItemText>{curElem}</Select.ItemText>
                                            <Select.ItemIndicator className="item-indicator">
                                                <CheckIcon/>
                                            </Select.ItemIndicator>
                                        </Select.Item>
                                )
                            })
                        }                     
                    </Select.Content>
               </Select.Root>
            </div>
        </>
     );
}
 
export default DropButton;