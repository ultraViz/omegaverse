import React, { useEffect, useRef } from "react";
import ServicesCards from "../components/ServicesCards";
import { gsap } from "gsap/dist/gsap";

import { ImAirplane } from "react-icons/im";
import { TbBuildingBridge } from "react-icons/tb";
import { SiBlockchaindotcom } from "react-icons/si";
import { GiCutDiamond } from "react-icons/gi";

function Services(props) {
	// const card1 = useRef(null)
	// const card2 = useRef(null)
	// const card3= useRef(null)

	// useEffect(() => {
	//   const cardContainer1 =  document.querySelector('.card1')
	//   const cardContainer2 =  document.querySelector('.card2')
	//   const cardContainer3 =  document.querySelector('.card3')

	//   let cardPlay1 = gsap.to(card1.current, {  zIndex:200,paused: true });
	//   let cardPlay2 = gsap.to(card2.current, { x: "-40%", zIndex:100 ,paused: true });
	//   let cardPlay3 = gsap.to(card3.current, { x: "-40%", zIndex:100 ,paused: true });

	//   cardContainer1.addEventListener("mouseover", () => cardPlay1.play())
	//   cardContainer1.addEventListener("mouseleave", () => cardPlay1.reverse())
	//   cardContainer2.addEventListener("mouseover", () => cardPlay2.play())
	//   cardContainer2.addEventListener("mouseleave", () => cardPlay2.reverse())
	//   cardContainer3.addEventListener("mouseover", () => cardPlay3.play())
	//   cardContainer3.addEventListener("mouseleave", () => cardPlay3.reverse())
	// });

	return (
		<div className="bg-[#010101]">
			<div
				className="py-14 min-h-screen w-full flex justify-center items-center bg-cover bg-no-repeat"
				style={{ backgroundImage: "url(./img/services/services.png) " }}
			>
				<div className="max-w-[90vw] md:max-w-[80vw] flex flex-col md:flex-row">
					<div className="min-h-screen flex flex-col  md:flex-row justify-center items-center gap-8">
						<div className="md:basis-2/4 w-full ">
							<div className="flex-1 flex flex-col mb-16">
								<h1 className="text-white heading">Services</h1>
								<span className="text-[#FF6600] sHeading">
									Industries we serve
								</span>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
							<div className="bg-[#00000077] border border-[#FF6600] flex flex-col items-center justify-center p-1 min-w-[260px] w-full">
								<ServicesCards
									icon={
										<TbBuildingBridge
											size={50}
											color="white"
											className="mb-10"
										/>
									}
									title="DFM & DFA"
									description="Design for manufacturing & 3D printing."
									textColor="#FF6600"
									className="relative"
								/>
							</div>

							<div className="bg-[#00000077] border border-[#FF6600] flex flex-col items-center justify-center p-1 min-w-[260px] w-full">
								<ServicesCards
									icon={
										<GiCutDiamond size={50} color="white" className="mb-10" />
									}
									title="Mega CNC Milling"
									description="3 axis to multi axis composites machining."
									textColor="white"
								/>
							</div>

							<div className="bg-[#00000077] border border-[#FF6600] flex flex-col items-center justify-center p-1 min-w-[260px] w-full">
								<ServicesCards
									icon={
										<SiBlockchaindotcom
											size={50}
											color="white"
											className="mb-10"
										/>
									}
									title="Mega 3D Printing"
									description="Large scale 3D printing (Coming Soon)"
									textColor="#FF6600"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="min-h-screen flex justify-center items-center bg-stone-100">
				<div className="flex flex-col md:flex-row gap-4 max-w-[90vw] md:max-w-[80vw]">
					<div className="flex-1 mb-16">
						<img src="/img/services/med.jpg" alt="" />
					</div>
					<div className="flex-1 pText">
						<h1 className="sHeading mb-4">Industry Applications</h1>
						<p className="">
							We recognize the significance of economic progress and industrial
							enrichment. With the high-quality components that we make and
							provide, they may be well-suited and built for a variety of
							sectors, including automotive and aerospace.
							<br />
						</p>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default Services;
