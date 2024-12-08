import CTAButton from "@/components/buttons/btn-cta";
import ScrollReveal from "@/components/containers/scroll-reveal";
import Spinner from "@/components/spinner/spinner";
import Typewriter from "@/components/typewriter";
import AboutMe from "@/components/home/about-me";
import Footer from "@/components/home/footer";
import NavigationButtons from "@/components/home/navigation-btns";
import Stacks from "@/components/home/stacks";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Home = () => {

	const [isLoading, setIsLoading] = React.useState(true);

	const typewriterDelay = 2000;

	const email = "example@gmail.com"; // TODO: change this to your desired email

	React.useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	if (isLoading) {
		return (
			<div className=" bg-white">
				<Spinner spinType="default" />;
			</div>
		);
	}

	return (
		<React.Fragment>
			<div id="up" />
			<div className=" h-[100vh]">
				<div className="flex flex-col h-full justify-center gap-10 px-5 lg:px-20">
					<Fade triggerOnce direction="left" className="lg:pt-[8rem] w-full">
						<h1 className=" ubuntu-bold text-mid lg:text-big text-slate-200 md:text-primary-dark ">
							{/*  */}
							Hi, my name is{" "}
							<span className=" text-primary capitalize">
								Placeholder {/*TODO: replace the placeholder with the actual name */}{" "}
							</span>
							<br />
							<Typewriter
								// TODO: replace the text(Software Developer) to whatever text you want to be there
								text="Software Developer."
								delay={typewriterDelay}
								speed={150}
							/>
						</h1>
					</Fade>
					<NavigationButtons delay={typewriterDelay + 3000} />
				</div>
			</div>

			<AboutMe />

			<Stacks />

			<section className="bg-white">
				<ScrollReveal className="flex flex-col items-center gap-10 ">
					<h1 className="ubuntu-bold text-darkBlue text-mid">Contact</h1>
					<div className="text-center space-y-5 ">
						<h1 className="ubuntu-regular text-default">Hire me</h1>
						<CTAButton
							type="anchor"
							href={`mailto:${email}`}
							target="_blank"
							className="ubuntu-bold p-3 border-2 border-darkBlue hover:text-white  hover:border-white after:bg-secondary-dark"
						>
							Send an Email
						</CTAButton>
					</div>
				</ScrollReveal>
			</section>
			<Footer />
		</React.Fragment>
	);
};

export default Home;
