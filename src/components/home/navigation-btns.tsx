import CTAButton from "@/components/buttons/btn-cta";
import { resume } from "@/constants/assets";

import { Fade } from "react-awesome-reveal";
type NavigationButtonsProps = { delay: number };
const NavigationButtons = ({ delay }: NavigationButtonsProps) => {
	return (
		<Fade triggerOnce delay={delay} direction="bottom-right" cascade className="">
			<ul className="flex  gap-10 justify-center hero-cta  flex-wrap">
				<CTAButton type="anchor" href="#about">
					About me
				</CTAButton>
				<CTAButton type="anchor" href={resume} target="_blank">
					View Resume
				</CTAButton>
			</ul>
		</Fade>
	);
};

export default NavigationButtons;
