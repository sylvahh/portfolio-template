import Stack from "./stacks/stack";
import ScrollReveal from "@/components/containers/scroll-reveal";
import { stacks } from "@/constants/dummy-data";
import { Fade } from "react-awesome-reveal";

const Stacks = () => {
	return (
		<ScrollReveal origin="left" className="mt-20">
			<section id="stacks" className="bg-primary-dark lg:-mt-[15rem]">
				<h1 className=" ubuntu-bold text-mid text-white text-center py-5 lg:py-10">Stacks</h1>
				<div className="flex flex-row flex-wrap gap-8 lg:pr-20 justify-center">
					<Fade cascade triggerOnce direction="bottom-right" duration={500} className=" ">
						{stacks.map((stack, idx) => (
							<Stack key={idx} stack={stack} />
						))}
					</Fade>
				</div>
			</section>
		</ScrollReveal>
	);
};

export default Stacks;
