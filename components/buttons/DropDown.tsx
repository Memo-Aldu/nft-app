import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components/native';
import { colors } from "../colors";
import RegularText from '../texts/RegularText';
import DropDownPicker from 'react-native-dropdown-picker';
import { DrownDownProps } from './types';



const DropDown: FunctionComponent<DrownDownProps> = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(props.data);
    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder={props.name}
        />
    );
};

export default DropDown;