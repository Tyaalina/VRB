import React, { Props } from "react";
import { Icon } from "semantic-ui-react";

export type TopicIconProps = {
  imagelink: any;
};

export const TopicIconComponent: (props: TopicIconProps) => JSX.Element = (
  props: TopicIconProps
) => {
  return (
    <>
        <img src={props.imagelink}  alt="1" className="topicImage"/> 
    </>
  );
};