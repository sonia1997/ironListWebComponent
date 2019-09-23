// import { PolymerElement, html } from '@polymer/polymer';
import { PolymerElement, html } from "https://unpkg.com/@polymer/polymer@^3.0.0-pre.12/polymer-element.js?module";
import '@polymer/iron-list/iron-list.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import '@polymer/iron-icon/iron-icon.js';
// import 'https://unpkg.com/tonysoft@1.53.21/iron-icons.js?module'

class RatingList extends PolymerElement {

  static get properties() {
    return {

      toggleIcon: {
             type: String
           },

           pressed: {
                 type: Boolean,
                 value: false,
                 notify: true,
                 reflectToAttribute: true
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

    <style>
              :host {
          display: inline-block;
          }
          iron-icon {
          fill: var(--icon-toggle-color, rgba(0,0,0,0));
          stroke: var(--icon-toggle-outline-color, currentcolor);
          }
          :host([pressed]) iron-icon {
          fill: var(--icon-toggle-pressed-color, currentcolor);
          }
</style>
      <div> My list: </div>
      <!-- <iron-icon icon="[[toggleIcon]]"></iron-icon> -->

      <template is="dom-repeat" items="{{variousIcons}}">
      <iron-icon icon="[[item.symbol]]"></iron-icon>

        <!-- <div><br/># [[index]]</div><div>icon: <span>[[item.symbol]]</span></div><div>icon: <span>[[item.symbol]]</span></div> -->

      </template>
    `;
  }

  constructor() {
    super();
    this.addEventListener('click', this.toggle.bind(this));
  }

  toggle() {
    this.pressed=!this.pressed;
  }

}
customElements.define('rating-list', RatingList);
