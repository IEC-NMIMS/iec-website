import { Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Item from "./Item";
import { EventList } from "./EventList";
import styled from "@emotion/styled";

const Events = () => {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024, marginleft: "10px" },
			items: 3.2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	const Headers = styled(Typography)({
		color: "white",
		fontFamily: "sans-serif",
		fontSize: "36px",
		margin: "20px 0px 20px 50px",
	});
	return (
		<>
			<Headers>Events</Headers>
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={true}
				showDots={false}
				containerClass=""
				ssr={false}
				autoPlaySpeed={1000}
				keyBoardControl={true}
				transitionDuration={500}
			>
				{EventList.map((info) => (
					<Item
						image={info.image}
						name={info.name}
						desc={info.desc}
						imageList={info.imageList}
						modaldata={info.modaldata}
					></Item>
				))}
			</Carousel>
			;
		</>
	);
};

export default Events;
