import React from 'react';
import * as S from './HeaderDev_style';

function Header() {
	return (
		<S.Header>
			{/* Header in NAV in Ul */}
			<S.HeaderWrap>
				<S.LogoWrap>
					<S.Title>VALORANT</S.Title>
				</S.LogoWrap>
				<S.MenuWrap>
					<S.MenuList>
						<S.MenuText>게임 정보</S.MenuText>
						<S.SubMenuWrap>
							<S.SubMenuList>
								<S.SubMenuAnchor>요원</S.SubMenuAnchor>
							</S.SubMenuList>
							<S.SubMenuList>
								<S.SubMenuAnchor>맵</S.SubMenuAnchor>
							</S.SubMenuList>
							<S.SubMenuList>
								<S.SubMenuAnchor>무기고</S.SubMenuAnchor>
							</S.SubMenuList>
						</S.SubMenuWrap>
					</S.MenuList>
					<S.MenuList>
						<S.MenuText>미디어</S.MenuText>
					</S.MenuList>
					<S.MenuList>
						<S.MenuText>순위표</S.MenuText>
					</S.MenuList>
				</S.MenuWrap>
			</S.HeaderWrap>
		</S.Header>
	);
}

export default Header;
