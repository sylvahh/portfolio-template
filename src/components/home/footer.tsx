import { chevronUp, github, linkedin } from "@/constants/assets";
import { SOCIAL_LINKS } from "@/global.types";

const Footer = () => {
	const date = new Date();
	return (
		<footer className="bg-gray">
			<div className="flex flex-col items-center gap-5">
				<a
					rel="noreferrer"
					href="#top"
					title="Back to top"
					className="hover:scale-110 hover:-translate-y-1"
				>
					<img src={chevronUp} alt="chevron-up" className="w-10" />
				</a>
				<div className="flex items-center gap-5 py-5">
					{/* <a
						rel=""
						title="Github"
						href={socials.github}
						target="_blank"
						className="hover:scale-110 hover:-translate-y-1"
					>
						<img src={github} alt="github" className="w-8" />
						<i className=""></i>
					</a> */}
					<a
						rel=""
						title="Linkedin"
						href={""}
						target="_blank"
						className="hover:scale-110 hover:-translate-y-1"
					>
						<img src={linkedin} alt="linkedin" className="w-8" />
					</a>
				</div>

				<hr className="w-1/2" />

				<pre className="text-footer text-sm font-mono ">
					© {date.getFullYear()}
					{/*TODO: change this to your details or leave it commented out */}
					{/*
          - Template developed by
					 <a
            rel='noreferrer'
            href='https://github.com/sylvahh'
            target='_blank'
            className='hover:text-primary pl-2'
          >
            Sylvester Asoh
          </a> */}
				</pre>
			</div>
		</footer>
	);
};

export default Footer;
