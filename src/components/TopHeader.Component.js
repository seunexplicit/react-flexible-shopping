export default function topHeader(props){
	return(
		<section id="headerBar" className="flex-row align-center">
			<p className="headerText">Vasiti Market PlatForm</p>
			<p className="no-light">Hi! {props.username}</p>
		</section>
		)
} 