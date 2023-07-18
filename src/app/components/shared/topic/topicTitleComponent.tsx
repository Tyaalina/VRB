import React, { Props } from "react";

export type TopicTitleProps = {
  title: any;
};

export const TopicTitleComponent: (props: TopicTitleProps) => JSX.Element = (
  props: TopicTitleProps
) => {
  return (
    <>
      {props.title}
    </>
  );
};