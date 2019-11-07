import { newSpecPage } from '@stencil/core/testing';
import { ShoppingList } from "../src/components/shopping-list";

describe('Shopping List Add-Button', () => {
    it('should render button', async () => {
        const page = await newSpecPage({ components: [ShoppingList] });

        await page.setContent(`
            <shopping-list
                btn-text="Add"
            ></shopping-list>
        `);

        expect(page.root.shadowRoot.querySelector('.shopping-list').querySelector('.shopping-list__button').textContent).toEqual('Add');
    });
});