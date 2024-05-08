import React, {useEffect} from "react";
import "./Header.css"
import Netflixlogo from "../../Assests/images/Netflix_Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
	useEffect(() => {
		document.title = "Netflix"; // Initial title
	}, []);
	return (
		<div className="main-container">
			<div className="header-container">
				<div className="header-left">
					<ul className="left-ul">
						<li>
							<img src={Netflixlogo} alt="Netflix logo" width="100" />
						</li>
						<li>Home</li>
						<li>Movies</li>
						<li>TV Shows</li>
						<li>New & Popular</li>
						<li>My List</li>
						<li>Browse by Languages</li>
					</ul>
				</div>
				<div className="header-right">
					<ul className="right-ul">
						<li>
							<SearchIcon />{" "}
						</li>
						<li>Kids</li>
						<li>
							<NotificationsNoneIcon />{" "}
						</li>
						<li>
							<AccountBoxIcon />
						</li>
						<li>
							<ArrowDropDownIcon />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
