
import React, {Component} from 'react';

class UsersPreferences extends Component{
  		render(){
        let users = this.props.users;
      	let movies = this.props.movies;
      	let profiles = this.props.profiles;	
          console.log(users);
    	return (
        	<div>
          		<ol>
                    {
                      profiles.map((profile) => (
        					<li>
          						{`${users[profile.userID].name}s favorite movie is ${movies[profile.favoriteMovieID].name}`}
          					</li>
        				))
                    }
   				</ol>
			</div>
        )
    }
}

export default UsersPreferences