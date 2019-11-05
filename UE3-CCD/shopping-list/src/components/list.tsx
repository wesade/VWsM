import {h} from '@stencil/core';
import { InputField } from './input';
import { Button } from './button';

export const List = ( { name, value, btnText } ) => {
    return <div class="shopping-list">
        <InputField name={name} value={value}></InputField>
        <Button btnText={btnText}></Button>
    </div>;
};
