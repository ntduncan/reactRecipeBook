import "./RecipeItem.css";

const RecipeItem = ({ recipe }) => {
	console.log(recipe);

	return (
		<div className="column recipeItem">
			{/* <div className="demo-title">Normal</div> */}
			<div className="post-module">
				<div className="thumbnail">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
				</div>
				<div className="post-content">
					<div className="category">Photos</div>
					<h1 className="title">City Lights in New York</h1>
					<h2 className="sub_title">The city that never sleeps.</h2>
					<p className="description">
						New York, the largest city in the U.S., is an architectural marvel
						with plenty of historic monuments, magnificent buildings and
						countless dazzling skyscrapers.
					</p>
					<div className="post-meta">
						<span className="timestamp">
							<i className="fa fa-clock-">o</i> 6 mins ago
						</span>
						<span className="comments">
							<i className="fa fa-comments"></i>
							<a href="#"> 39 comments</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecipeItem;
