import React from "react";
import DefaultButton from "./";

export default {
  title: "Default Button",

  component: DefaultButton,
};

export const Default = (): React.ReactNode => (
  <DefaultButton title="Default Button" onClick={() => {}} type="button" />
);
