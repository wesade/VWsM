import {h} from '@stencil/core';
import { InputField } from './input';

export const List = ( { name, value } ) => {
    return <div class="shopping-list">
        <InputField name={name} value={value}></InputField>
    </div>;
};
