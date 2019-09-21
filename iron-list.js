import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-list/iron-list.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-icon/iron-icon.js';
import 'https://unpkg.com/tonysoft@1.53.21/iron-icons.js?module'

class IronList extends PolymerElement {

  static get properties() {
    return {

      toggleIcon: {
             type: String
           },

           variousIcons: {
             type: Array,
             value() {
               return [
                 {symbol: 'star'},
                 {symbol: 'star'},
                 {symbol: 'star'},
                 {symbol: 'star'},
                 {symbol: 'star'}
               ];
             }
           },

      employees: {
        type: Array,
        value() {
          return [
            {given: 'Sonia', marks: '50'},
            {given: 'Priya', marks: '50'},
          ];
        }
      }

    };
  }

  static get template() {
    return html`
      <div> My list: </div>
      <!-- <iron-icon icon="[[toggleIcon]]"></iron-icon> -->

      <template is="dom-repeat" items="{{variousIcons}}">
      <iron-icon icon="[[item.symbol]]"></iron-icon>

        <!-- <div><br/># [[index]]</div><div>icon: <span>[[item.symbol]]</span></div><div>icon: <span>[[item.symbol]]</span></div> -->

      </template>
    `;
  }

  // static get template() {
  //   return html`
  //     <style>
  //       :host {
  //         display: block;
  //       }
  //
  //       iron-list {
  //         height: 100vh; /* don't use % values unless the parent element is sized. */
  //       }
  //     </style>
  //     <!-- <iron-list items="[[itemList]]" as="item">
  //       <template>
  //         <div>
  //           [[item]]
  //         </div>
  //       </template>
  //     </iron-list> -->
  //     <h3> [[itemList]] </h3>
  //   `;
  // }

  // static get properties () {
  //   return {
  //     toggleIcon: {
  //       type: String
  //     },
  //     pressed: {
  //       type: Boolean,
  //       value: false,
  //       notify: true,
  //       reflectToAttribute: true
  //     },
  //     itemList:{
  //       type: Array,
  //       value: ["star", "add", "settings"]
  //     }
  //
  //   };
  // }
  constructor() {
    super();
    // this.addEventListener('click', this.toggle.bind(this));
  }

}
customElements.define('iron-list', IronList);
