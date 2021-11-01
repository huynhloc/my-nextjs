export type FieldData = {
  value: unknown;
  fieldType: string;
  formFieldId: string;
};

export type FormResponse = {
  formType: string;
  fieldData: FieldData[];
};

export type Submission = {
  submissionId: string;
  projectId: string;
  formResponses: FormResponse[];
};

export type GetSubmissionsResponse = {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  items: Submission[];
};
