import CTAButton from "@/components/buttons/btn-cta";
import ScrollReveal from "@/components/containers/scroll-reveal";
import { profile2, resume } from "@/constants/assets";
import React from "react";

const AboutMe = () => {
	return (
		<section id="about" className="">
			<ScrollReveal distance="10%" origin="top">
				<h1 className="text-center text-mid ubuntu-bold text-white mb-10 uppercase">About Me</h1>
			</ScrollReveal>
			<div className="flex flex-col lg:flex-row gap-10 items-start pb-10 lg:pb-20">
				<ScrollReveal distance="5%" origin="bottom" className="flex justify-center w-full lg:w-1/2">
					<img
						src={profile2}
						alt="profile image"
						className="lg:w-[75%] w-full h-[27rem] lg:h-64 object-cover rounded object-top opacity-70 shadow-2xl shadow-black border-primary-dark border"
					/>
				</ScrollReveal>

				<ScrollReveal distance="10%" origin="right" className="space-y-10 lg:space-y-5 w-full">
					<p className="text-white ubuntu-regular leading-8 lg:px-10">
						{/* TODO: change this to your desired bio the text should be a */}
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo modi voluptate unde maxime
						corrupti assumenda ipsa harum adipisci. Vel fugiat, a et error dolorum amet eius nisi
						voluptate corrupti nostrum molestias maxime expedita dolores corporis sapiente
						excepturi, architecto culpa facilis atque sit! Quia aut inventore dicta, nesciunt unde
						laboriosam neque!
					</p>

				

					<div className="flex justify-center lg:justify-end">
						<CTAButton
							type="anchor"
							href={resume}
							target="_blank"
							className="border p-3 border-white text-white hover:text-primary-dark after:bg-white "
						>
							Veiw Resume
						</CTAButton>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
};

export default AboutMe;
