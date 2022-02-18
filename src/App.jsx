import React, { useState } from "react";
import Button from "./components/Button";
import favicon from "./images/favicon.png";
import SnackBar from "./components/SnackBar";
import emailjs from "emailjs-com";
import resume from "./assets/resume.pdf";
import image from "./images/contact.jpeg";
import gh from "./images/github.svg";
import ig from "./images/instagram.svg";
import ld from "./images/linkedin.svg";
import tw from "./images/twitter.svg";
import ph from "./images/phone.svg";
import ml from "./images/email.svg";
import wa from "./images/whatsapp.svg";
import fb from "./images/facebook.svg";
import fl from "./images/file.svg";

const App = () => {
	const [show, setShow] = useState(false);
	const [fabIcon, setFabIcon] = useState(true);
	const [user, setUser] = useState({
		name: "",
		email: "",
		message: "",
	});
	const author = {
		name: "Akshat Mittal",
		image: "https://pbs.twimg.com/profile_images/1456999448710504454/b4rjNopn_400x400.jpg",
		about: "MERN stack developer",
		socials: [
			{
				username: "@akshatmittal61",
				link: "https://twitter.com/akshatmittal61",
				handle: "twitter",
			},
			{
				username: "@akshatmittal61",
				link: "https://instagram.com/akshatmittal61",
				handle: "instagram",
			},
			{
				username: "akshatmittal2506@gmail.com",
				link: "mailto:akshatmittal2506@gmail.com",
				handle: "email",
			},
			{
				username: "@akshatmittal61",
				link: "https://www.linkedin.com/in/akshatmittal61/",
				handle: "linkedin",
			},
			{
				username: "@akshatmittal61",
				link: "https://www.github.com/akshatmittal61",
				handle: "github",
			},
			{
				username: "My Resume",
				link: resume,
				handle: "resume",
			},
			{
				username: "+91 94568 49466",
				link: "tel:919456849466",
				handle: "phone",
			},
			{
				username: "9456849466",
				link: "https://api.whatsapp.com/send?phone=+919456849466",
				handle: "whatsapp",
			},
			{
				username: "akshatmittal61",
				link: "https://www.facebook.com/akshatmittal61/",
				handle: "facebook",
			},
		],
	};
	const getIcon = (handle) => {
		switch (handle) {
			case "twitter":
				return tw;
			case "instagram":
				return ig;
			case "linkedin":
				return ld;
			case "github":
				return gh;
			case "phone":
				return ph;
			case "email":
				return ml;
			case "whatsapp":
				return wa;
			case "facebook":
				return fb;
			case "resume":
				return fl;
			default:
				break;
		}
	};
	const getColor = (handle) => {
		switch (handle) {
			case "twitter":
				return "light-blue";
			case "instagram":
				return "pink";
			case "linkedin":
				return "blue";
			case "github":
				return "blue-grey";
			case "phone":
				return "indigo";
			case "email":
				return "red";
			case "whatsapp":
				return "green";
			case "facebook":
				return "blue";
			default:
				break;
		}
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({
			name: "",
			email: "",
			message: "",
		});
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				e.target,
				process.env.REACT_APP_USER
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setShow(true);
		setTimeout(() => {
			setShow(false);
		}, 2500);
	};
	const handleFab = () => {
		setFabIcon(!fabIcon);
	};
	return (
		<>
			<section
				className="contact"
				style={{
					backgroundImage: `url(${image})`,
				}}
			>
				<div className="contact-box">
					<div
						className="contact-side contact-side-front"
						style={{
							transform: !fabIcon
								? "rotateY(-180deg)"
								: "rotateY(0deg)",
						}}
					>
						<div className="contact-container">
							<div className="contact-head contact-head-me">
								<div className="contact-head-image">
									<img
										src={favicon}
										alt="Akshat Mittal"
										className="contact-head-image__img"
									/>
								</div>
								<div className="contact-head-content">
									<span className="contact-head-content__name">
										{author.name}
									</span>
									<span
										className="contact-head-content__about"
										style={{
											textTransform: "none",
										}}
									>
										{author.about}
									</span>
								</div>
							</div>
							<div className="contact-body">
								<div className="row">
									{author.socials.map((social, index) => (
										<div
											className="col-lg-33 col-md-50 col-sm-100"
											key={index}
										>
											<div className="contact-social">
												<Button
													text={
														<>
															<div className="contact-social-image">
																<img
																	src={getIcon(
																		social.handle
																	)}
																	alt={
																		social.handle
																	}
																/>
															</div>
															<div className="contact-social-content">
																{
																	social.username
																}
															</div>
														</>
													}
													containsHref
													href={social.link}
													color={getColor(
														social.handle
													)}
												/>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div
						className="contact-side contact-side-back"
						style={{
							transform: fabIcon
								? "rotateY(180deg)"
								: "rotateY(0deg)",
						}}
					>
						<div className="contact-container">
							<div className="contact-head">Contact Me</div>
							<form
								className="contact-form"
								onSubmit={handleSubmit}
							>
								<input
									type="text"
									name="name"
									placeholder="Your Name"
									value={user.name}
									onChange={handleChange}
									required
								/>
								<input
									type="email"
									name="email"
									placeholder="Your Email"
									value={user.email}
									onChange={handleChange}
								/>
								<textarea
									name="message"
									placeholder="Your message here"
									value={user.message}
									onChange={handleChange}
									required
								></textarea>
								<Button
									text="Submit Your message"
									type={"submit"}
									color="transparent"
									style={{ color: "var(--bgcolor)" }}
								/>
							</form>
						</div>
					</div>
				</div>
				<button className="fab" onClick={handleFab}>
					<span className="material-icons">
						{fabIcon ? "chat" : "account_circle"}
					</span>
				</button>
				{show && (
					<SnackBar text="Response Submitted" delayTime={2500} />
				)}
			</section>
		</>
	);
};

export default App;
