window.onload = function(){

  const xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
  
  if(xhr.status === 200){
  
  const movies = JSON.parse(xhr.responseText);
  
  const body = document.querySelector("body");
  
  const heading = document.createElement("h1");
  heading.textContent = "Movies";
  body.appendChild(heading);
  
  movies.forEach(function(movie){
  
  const article = document.createElement("article");
  
  article.id = movie.imdbID;
  
  
  
  const title = document.createElement("h2");
  title.textContent = movie.Title;
  article.appendChild(title);
  
  
  
  const img = document.createElement("img");
  img.src = movie.Poster;
  article.appendChild(img);
  
  
  
  
  const released = document.createElement("p");
  released.textContent = "Released: " + movie.Released;
  article.appendChild(released);
  
  
  
  
  const runtime = document.createElement("p");
  runtime.textContent = "Runtime: " + movie.Runtime + " min";
  article.appendChild(runtime);
  
  
  
  const genres = document.createElement("p");
  
  const genreLabel = document.createElement("strong");
  genreLabel.textContent = "Genres: ";
  
  genres.appendChild(genreLabel);
  
  movie.Genres.forEach(function(g){
  
  const span = document.createElement("span");
  
  span.className = "genre";
  
  span.textContent = g;
  
  genres.appendChild(span);
  
  });
  
  article.appendChild(genres);
  
  
  const directorsTitle = document.createElement("h3");
  directorsTitle.textContent = "Directors";
  article.appendChild(directorsTitle);
  
  const directorsList = document.createElement("ul");
  
  movie.Directors.forEach(function(d){
  
  const li = document.createElement("li");
  
  li.textContent = d;
  
  directorsList.appendChild(li);
  
  });
  
  article.appendChild(directorsList);
  
  
  
  
  
  /* WRITERS */
  
  const writersTitle = document.createElement("h3");
  writersTitle.textContent = "Writers";
  article.appendChild(writersTitle);
  
  const writersList = document.createElement("ul");
  
  movie.Writers.forEach(function(w){
  
  const li = document.createElement("li");
  
  li.textContent = w;
  
  writersList.appendChild(li);
  
  });
  
  article.appendChild(writersList);
  
  

  
  const actorsTitle = document.createElement("h3");
  actorsTitle.textContent = "Actors";
  article.appendChild(actorsTitle);
  
  const actorsList = document.createElement("ul");
  
  movie.Actors.forEach(function(a){
  
  const li = document.createElement("li");
  
  li.textContent = a;
  
  actorsList.appendChild(li);
  
  });
  
  article.appendChild(actorsList);
  
  

  
  const plotTitle = document.createElement("h3");
  plotTitle.textContent = "Plot";
  article.appendChild(plotTitle);
  
  const plot = document.createElement("p");
  
  plot.textContent = movie.Plot;
  
  article.appendChild(plot);
  
  
  const metascore = document.createElement("p");
  
  metascore.textContent = "Metascore: " + movie.Metascore;
  
  article.appendChild(metascore);
  
  
  const rating = document.createElement("p");
  
  rating.textContent = "IMDB Rating: " + movie.imdbRating;
  
  article.appendChild(rating);
  
  
  
  
  
  /* EDIT BUTTON */
  
  const editButton = document.createElement("button");
  
  editButton.textContent = "Edit";
  
  editButton.onclick = function(){
  
  location.href = "edit.html?imdbID=" + movie.imdbID;
  
  };
  
  article.appendChild(editButton);
  
  
  body.appendChild(article);
  
  });
  
  }
  
  };
  
  xhr.open("GET","/movies");
  
  xhr.send();
  
  }