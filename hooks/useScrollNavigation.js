import { useEffect, useState } from "react";

const useScrollNavigation = () => {

	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 0) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	let classNavigation = ["container"];
	if (scrolled) {
		classNavigation.push("scrolled")
		classNavigation = classNavigation.join(" ")
	}

	return {
		classNavigation
	}
}

export default useScrollNavigation