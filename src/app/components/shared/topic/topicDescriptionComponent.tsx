import React, { Props } from "react";

export type TopicDescriptionProps = {
  description: any;
};

export const TopicDescriptionComponent: (
  props: TopicDescriptionProps
) => JSX.Element = (props: TopicDescriptionProps) => {
  return (
    <>
      {props.description}
    </>
  );
};
