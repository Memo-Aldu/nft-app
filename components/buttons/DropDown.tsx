import React, { FunctionComponent, useState } from 'react';
import { colors } from "../colors";
import DropDownPicker from 'react-native-dropdown-picker';
import { Platform } from 'react-native';

interface DropDownProps {
    data:  Array<any>;
    onChange: (item: any) => void;
    name: string;
}

const DropDown: FunctionComponent<DropDownProps> = (props: DropDownProps) => {
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
            style={[Platform.OS === 'ios' ? {height: 40, zIndex: 10}: {height: 40}, {
                backgroundColor: 'transparent',
                borderColor: colors.grey,
                borderWidth: 0,
                borderRadius: 5,
                padding: 5,
            }]}
            onSelectItem={(item) => {props.onChange(item.value)}}
            textStyle={{
                fontSize: 14,
                color: colors.orange,
            }}
            containerStyle={{
                justifyContent: 'center',
                alignSelf: 'center',
                zIndex: 100,
                height:60,
            }}
            dropDownContainerStyle={{
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: colors.lightGrey,
                borderWidth: 0,
            }}
        />
    );
};

export default DropDown;