// pages/about.js
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { getAllSubmission, getSubmission } from 'api/submittable';
import { Submission } from 'type/idex';

const ReactJson = dynamic(async () => import('react-json-view'), {
  ssr: false,
});

// const formatToOurInterface = (data: EOISubmission) => ({ ...data });

const CVLPSubmittable: NextPage = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  const getSubmissions = async () => {
    try {
      const data = await getAllSubmission(
        process.env.NEXT_PUBLIC_SUBMITTABLE_CVLP_FUNDED_SUPPORT_ID
      );
      const submissionPromises = data?.items?.map(async (submission) =>
        getSubmission(submission.submissionId)
      );
      const submissionDetails = await Promise.all(submissionPromises);
      setSubmissions(submissionDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubmissions();
  }, []);
  return <ReactJson src={submissions} />;
};

export default CVLPSubmittable;
