class HeadBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowDOM.innerHTML = `
          <style>
          * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          }

          :host {
            display: block;
            padding: 20px;
            width: 100%;
            height: 100px;
            background-color: #bfb767;
            color: #fff;
            text-align: left;
            
          }
          :host a {
            color: #663333;
            background-color: white ;
            border-radius: 20px;
            
          }
  
          h2 {
            padding-top: 30px;
            letter-spacing: 3px;
            padding-left: 40px;
            font-size: 40px;
          }
          </style>
          <h2>My Kitchen</h2>`;
    }
  }
  customElements.define("head-bar", HeadBar);
  