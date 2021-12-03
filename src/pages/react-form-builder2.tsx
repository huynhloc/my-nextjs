// pages/about.js
import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { FormBuilderPostData, ReactFormBuilder } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';

// Form Data
const url = '/formbuilder.json';
// const saveUrl = '/api/formdata';
import { postForm, loadForm } from 'api/formbuilder';

const ReactFormBuilder2: NextPage = () => {
  const onLoad = async () => {
    return loadForm();
  };

  const onPost = (data: FormBuilderPostData) => {
    postForm(data.task_data);
  };

  return (
    <>
      <div style={{ margin: '20px' }}>
        <Link href="/view-form">
          <a>Preview</a>
        </Link>
      </div>
      <ReactFormBuilder
        url={url} // use only one of url or onLoad to load form
        // onLoad={onLoad}
        // saveUrl={saveUrl}
        onPost={onPost} // use only one of saveUrl or onPost to save form
      />
    </>
  );
};

export default ReactFormBuilder2;
