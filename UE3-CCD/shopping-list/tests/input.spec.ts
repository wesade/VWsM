import { newSpecPage } from '@stencil/core/testing';
import { ShoppingList } from "../src/components/shopping-list";

describe('Shopping List Input', () => {
    it('should render an input field', async () => {
        const page = await newSpecPage({ components: [ShoppingList] });

        await page.setContent(`
            <shopping-list>
            </shopping-list>
        `);

        expect(page.root.shadowRoot.querySelector('.shopping-list').querySelector('input')).toHaveAttribute('type');
    });

    it('should render an input field with name', async () => {
        const page = await newSpecPage({ components: [ShoppingList] });

        await page.setContent(`
            <shopping-list
                name="myName"
            ></shopping-list>
        `);

        expect(page.root.shadowRoot.querySelector('.shopping-list').querySelector('input').getAttribute('name')).toEqual('myName');
    });

    it('should render an input field with value', async () => {
        const page = await newSpecPage({ components: [ShoppingList] });

        await page.setContent(`
            <shopping-list
                value="myValue"
            ></shopping-list>
        `);

        expect(page.root.shadowRoot.querySelector('.shopping-list').querySelector('input').getAttribute('value')).toEqual('myValue');
    });
});