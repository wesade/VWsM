import {h} from '@stencil/core';

export const InputField = ( { name, value } ) => {
    return <input type="text" name={name} value={value} />
};
