import React from 'react'
import Navbar from './navbar'
import image from './images/profile_update.jpeg'
import '../about.css'


export default function about() {
	return (
		<div>
			<Navbar />

			<section id="about">

				<div >
					<div className="col-twelve">

						<div className="intro-info">

							<img id="profileimg" src={image} alt="Profile Picture" />
							<br />
							<br />
							<div className="lead">
								{"I take care of all the requirements related to Android. Teaching is my passion, Android is my Interest so I'm Android Trainer now.When you make your passion as your profession, you don't need to work not even  "}
								<br />
								{" a single day in your Life! I Enjoy my work .Basically I'm an Instrumentation Engineering graduate, crafted my path as an Android professional on my own interest."}
							</div>



						</div>

					</div>
				</div>
				<br />
				<div className=" about-content"  >

					<div>
						<ul className="info-list">
							<li>
								<strong>Profile:</strong>
								<span>Having 6 years of experience which is purely on Android.</span>
							</li>
							<li>
								<strong>Fullname:</strong>
								<span>K P Ranjith Kumar</span>
							</li>
							<li>
								<strong>Birth Date:</strong>
								<span>October  2, 1989</span>
							</li>
							<li>
								<strong>Job:</strong>
								<span>Senior Android Developer & Trainer, Founder of AndroidManifester, Software Entrepreneur</span>
							</li>
						</ul>
					</div>
				</div>

			</section>

		</div>
	)

}