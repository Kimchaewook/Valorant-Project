import styled from 'styled-components';

export const Header = styled.header`
	height: 6.25rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid black;
`;

export const NavBar = styled.nav``;

export const TitleLogo = styled.h1`
	font-size: 20px;
	font-weight: 700;
	color: red;
	margin: 0px 2rem;
`;

export const MeunWrap = styled.ul`
	/* display: flex; */
	position: absolute;
	top: 100px;
	min-width: 200px;
	height: 150px;
	background-color: #292929;
`;

export const List = styled.li`
	margin: 1rem 1rem;
`;

export const TestA2 = styled.a`
	display: inline-block;
	width: 100%;
	padding: 8px 0px;
	width: 100%;
	height: 100%;
	font-size: 13px;
	font-weight: 500;
	color: #fff;
	text-decoration: none;
`;

export const Test2 = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: 0px 20px;
`;

export const TestA = styled.a`
	width: 100px;
	height: 20px;
	position: absolute;
`;

export const Test3 = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	position: relative;
`;

export const TestP = styled.p`
	padding: 7.5px 16px;
	&:hover {
		border-radius: 6.5px;
		background: rgba(128, 128, 128, 0.3);
	}
	${List} {
		opacity: 0;
		visibility: hidden;
	}
`;
