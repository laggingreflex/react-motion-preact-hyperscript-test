import { render, Component } from 'preact';
import { h as defaultH } from 'preact';
import { createElement as hyperscriptH } from 'preact-hyperscript';
import { Motion, spring } from 'react-motion';

class App extends Component {
  render() {
    // return defaultH(Motion, { // < works
    return hyperscriptH(Motion, { // < doesn't work (Failed prop type: Invalid prop `style` of type `string` supplied to `Motion`, expected an object.)
      defaultStyle: { x: 0 },
      style: { x: spring(10) }
    }, [value => hyperscriptH('div', value.x)]);
  }
}

render(hyperscriptH(App), document.getElementById('app'));
