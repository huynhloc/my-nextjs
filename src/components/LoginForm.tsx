// @ts-nocheck

import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

require('jquery-ui-sortable');
require('formBuilder');

window.jQuery = $;
window.$ = $;

const formData = [
  {
    type: 'header',
    subtype: 'h1',
    label: 'formBuilder in React',
  },
  {
    type: 'paragraph',
    label: 'This is a demonstration of formBuilder running in a React project.',
  },
];

/* 
The order of the imports and requires is very important, especially in the online enviornment.
The two jQuery libraries must be imported using Node's require(), and not ES6 import.
Also, these two requires MUST come after setting the global jQuery and $ symbols.

In my Babel/Webpack project, the type and order of the imports is a little less sensitive.
For my project, the following alternative works:

    import $ from 'jquery';
    import React from 'react';
    import ReactDOM from 'react-dom';
    import 'jquery-ui-sortable';

    window.jQuery = $;
    window.$ = $;

    require('formBuilder');
*/

const FormBuilder = () => {
  const fb = useRef();
  useEffect(() => {
    console.log('aaa');
    $(this.fb.current).formBuilder({ formData });
  }, []);

  return <div id="fb-editor" ref={fb} />;
};

export default FormBuilder;