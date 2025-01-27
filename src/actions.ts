// src/actions.ts
export const setFormData = (data: any) => {
  return {
    type: "SET_FORM_DATA",
    payload: data,
  };
};
