import {Component, Prop, h} from '@stencil/core';
import { List } from './list';

@Component({
    tag: 'shopping-list',
    styleUrl: 'shopping-list.scss',
    shadow: true
})
export class ShoppingList {

    @Prop() name: string;
    @Prop() value: string;

    render() {
        return <List name={this.name} value={this.value}></List>;
    }
}
