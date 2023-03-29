import styled from 'styled-components';

export const Header = styled.header`
	height: 100px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid black;
`;

export const HeaderWrap = styled.nav`
	height: 100%;
	display: flex;
`;

export const LogoWrap = styled.div`
	display: flex;
	align-items: center;
`;

export const Title = styled.h1`
	font-size: 20px;
	font-weight: 700;
	color: red;
	margin: 0px 2rem;
`;

export const MenuWrap = styled.ul`
	display: flex;
	align-items: center;
`;

export const MenuText = styled.p`
	padding: 7.5px 16px;
	&:hover {
		border-radius: 6.5px;
		background: rgba(128, 128, 128, 0.3);
	}
`;

export const MenuList = styled.li`
	display: flex;
	align-items: center;
	height: 100%;
`;

export const SubMenuWrap = styled.ul`
	display: none;
	position: absolute;
	top: 100px;
	min-width: 200px;
	background-color: #292929;
	color: #fff;
	${MenuList}:hover & {
		display: block;
	}
`;

export const SubMenuList = styled.li`
	margin: 16px;
`;

export const SubMenuAnchor = styled.a`
	display: inline-block;
	padding: 8px 0px;
	height: 100%;
	width: 100%;
	&:hover {
		border-radius: 6.5px;
		background: rgba(128, 128, 128, 0.3);
	}
`;
