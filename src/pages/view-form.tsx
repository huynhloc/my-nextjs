// pages/about.js
import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { ReactFormGenerator, TaskData } from 'react-form-builder2';
import 'react-form-builder2/dist/app.css';
import { loadForm } from 'api/formbuilder';

const ReactFormBuilder2: NextPage = () => {
  const [form, setForm] = useState<TaskData[]>([]);

  const loadQuestions = async () => {
    try {
      const data = await loadForm();
      console.log(data);
      setForm(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);
  const onSubmit = async () => {
    console.log({});
  };

  return (
    <ReactFormGenerator
      form_action=""
      onSubmit={onSubmit}
      form_method="POST"
      // answer_data={JSON_ANSWERS} // Answer data, only used if loading a pre-existing form with values.
      data={form} // Question data
    />
  );
};

export default ReactFormBuilder2;
