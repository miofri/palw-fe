import React from 'react';
import { Layout } from '../Layout';
import * as Styles from '../../styles/GlobalStyles';
export const About: React.FC<{
	pageColorTheme: 'dark' | 'light';
	setPageColorTheme: React.Dispatch<React.SetStateAction<'dark' | 'light'>>;
}> = ({ pageColorTheme, setPageColorTheme }) => {
	return (
		<Layout
			pageColorTheme={pageColorTheme}
			setPageColorTheme={setPageColorTheme}
		>
			<Styles.About.Container>
				<h1>About this app</h1>
				<p>
					Palworld breeding combination calculator is a learning project made
					with create-react-app, Redux Toolkit, styled-components, and written
					in TypeScript.
				</p>
				<p>
					The back-end is built with Express.js and MongoDB Atlas. This app is
					hosted by Fly.io.
				</p>
				<p>
					The pal data used in this project was collected from{' '}
					<a href="https://www.reddit.com/r/Palworld/comments/19d98ws/spreadsheet_all_breeding_combinations_datamined/">
						here
					</a>
					. The pals used in this app are only the base pals and does not
					include special pals like bosses.
				</p>

				<footer>
					palw.fly.dev is not affiliated with in any way, or endorsed by
					Pocketpair.
				</footer>
			</Styles.About.Container>
		</Layout>
	);
};
