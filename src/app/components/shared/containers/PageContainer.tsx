import React from "react";
import { Header } from "../../header/header";

export type PageContainerProps = {
	children: JSX.Element,
	title: string
};

export const PageContainer: (props: PageContainerProps) => JSX.Element = (props: PageContainerProps) => {
	return (
		<>
			<Header  />

			<div className="container">
				<div className="content">
					{props.children}
				</div>
			</div>
		</>
	);
};