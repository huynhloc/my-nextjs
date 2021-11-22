// pages/about.js
import React from 'react';
import type { NextPage } from 'next';
import { ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';

// Form Data
const url = '/api/formdata';
const saveUrl = '/api/formdata';
const postUrl = '/api/form';

const ReactFormBuilder2: NextPage = () => {
  return <ReactFormBuilder url={url} saveUrl={saveUrl} />;
};

export default ReactFormBuilder2;
