import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-list/iron-list.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-icon/iron-icon.js';
// import '@polymer/iron-icons/iron-icons.js';

import 'https://unpkg.com/tonysoft@1.53.21/iron-icons.js?module'
// import '@polymer/iron-list/iron-list.js';
import '../iron-list.js'

class DemoElement extends PolymerElement {
  static get template() {
    return html`
    <style>
    /* :host {
font-family: sans-serif;
--icon-toggle-color: lightgrey;
--icon-toggle-outline-color: black;
--icon-toggle-pressed-color: yellow;
} */
    </style>

<center>
       <h3>Sample rating bar web component</h3>

       <!-- <iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax> -->
       <!-- <iron-list given="xyz" marks="900"></iron-list> -->
       <!-- <iron-list toggle-icon="star"></iron-list> -->

       <iron-list toggle-icon="star"> </iron-list>

      <!-- <iron-list item-list="[[data]]" as="item">
        <template>
          <div>
            Name: [[item.name]]
          </div>
        </template>
      </iron-list> -->

       <!-- <iron-list item-list="star"></iron-list> -->

      <!-- <icon-toggle toggle-icon="star"></icon-toggle>
      <icon-toggle toggle-icon="add"></icon-toggle>
      <icon-toggle toggle-icon="settings"></icon-toggle> -->
</center>

      <!-- <h3>Data-bound icon-toggle</h3> -->

      <!-- use a computed binding to generate the message -->
      <!-- <div><span>[[_message(isFav)]]</span></div> -->

      <!-- curly brackets ({{}}} allow two-way binding -->
      <!-- <icon-toggle toggle-icon="favorite" pressed="{{isFav}}"></icon-toggle> -->
    `;
  }
  // _message(fav) {
  //   if (fav) {
  //     return 'You really like me!';
  //   }
  //   else {
  //     return 'Do you like me?';
  //   }
  // }
}
customElements.define('demo-element', DemoElement);
