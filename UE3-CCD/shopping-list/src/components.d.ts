/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ShoppingList {
    'btnText': string;
    'name': string;
    'value': string;
  }
}

declare global {


  interface HTMLShoppingListElement extends Components.ShoppingList, HTMLStencilElement {}
  var HTMLShoppingListElement: {
    prototype: HTMLShoppingListElement;
    new (): HTMLShoppingListElement;
  };
  interface HTMLElementTagNameMap {
    'shopping-list': HTMLShoppingListElement;
  }
}

declare namespace LocalJSX {
  interface ShoppingList {
    'btnText'?: string;
    'name'?: string;
    'value'?: string;
  }

  interface IntrinsicElements {
    'shopping-list': ShoppingList;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'shopping-list': LocalJSX.ShoppingList & JSXBase.HTMLAttributes<HTMLShoppingListElement>;
    }
  }
}


