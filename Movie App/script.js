"use strict";

const movies = [
  {
    id: 1,
    title: "🦇⚡Batman vs Superman: Dawn of Justice",
    description:
      "Fearing the unchecked power of a god-like superhero, Gotham’s formidable vigilante, Batman, takes on Metropolis’s revered savior, Superman. As the world grapples with the question of who its true hero is, tensions escalate into a full-scale conflict between the Dark Knight and the Man of Steel. But as their battle reaches a critical point, a greater threat emerges—one that could annihilate all of humanity. With the fate of the world hanging in the balance, the two legends must confront their differences and unite against a common enemy in this epic showdown of justice and power.",
    price: 5.99,
    watched: false,
  },
  {
    id: 2,
    title: "🕷️ Venom ",
    description:
      "When journalist Eddie Brock investigates a shady operation run by the powerful Life Foundation, he becomes the unwilling host of an alien symbiote. As the entity merges with his body, Eddie is granted superhuman strength and unpredictable powers—but at a cost. Struggling to control the violent, parasitic force inside him, he must learn to coexist with Venom or risk losing everything. As dark forces close in, Eddie faces a moral dilemma that blurs the line between hero and monster in this action-packed, edgy origin story",
    price: 4.99,
    watched: false,
  },

  {
    id: 3,
    title: "💰 Money Heist ",
    description:
      "In a meticulously planned heist unlike any the world has seen, a criminal mastermind known as “The Professor” recruits eight specialists with unique skills and nothing to lose. Their target: the Royal Mint of Spain. Their mission: print billions of euros while holding hostages inside. What starts as a calculated robbery quickly spirals into a psychological battle between the robbers, the authorities, and even themselves. As tensions rise and loyalties are tested, the group must stick to the plan—or risk everything. A thrilling tale of resistance, identity, and rebellion unfolds in this high-stakes drama.",
    price: 6.99,
    watched: false,
  },

  {
    id: 4,
    title: "🧢 Peaky Blinders ",
    description:
      "In post-World War I Birmingham, England, the streets are ruled by the ruthless Shelby family—led by the ambitious and cunning Tommy Shelby. As the Peaky Blinders rise through the criminal underworld, Tommy sets his sights on building a criminal empire that stretches beyond the city’s smoky factories and pubs. But power comes at a cost. Surrounded by enemies, political schemes, and inner demons, Tommy must outwit both rivals and allies to survive. Gritty, stylish, and fiercely intense, Peaky Blinders is a tale of ambition, loyalty, and the cost of power.",
    price: 7.99,
    watched: false,
  },

  {
    id: 5,
    title: "⚡ The Flash",
    description:
      "Barry Allen, a brilliant but socially awkward forensic scientist, is struck by a freak lightning storm during a particle accelerator explosion—waking to discover he can move at superhuman speed. As he embraces his newfound abilities, Barry becomes The Flash, Central City’s red-suited guardian. But as he races to uncover the mystery behind his mother’s murder and stop meta-human threats, he realizes that changing the past can have dangerous consequences. With time itself in flux, Barry must learn that being a hero isn’t about power—it’s about heart, sacrifice, and knowing when to let go.",
    price: 4.99,
    watched: false,
  },

  {
    id: 6,
    title: "🔐 Prison Break",
    description:
      "When Lincoln Burrows is wrongfully sentenced to death for a crime he didn’t commit, his brilliant brother, Michael Scofield, devises an audacious plan to save him. With the blueprints of the prison secretly tattooed on his body, Michael commits a crime to get incarcerated alongside Lincoln. Inside the walls of Fox River Penitentiary, a high-stakes game of strategy, deception, and danger unfolds. As time runs out, Michael must outsmart corrupt officials, violent inmates, and a ruthless conspiracy to pull off the ultimate escape. Prison Break is a gripping story of loyalty, sacrifice, and calculated rebellion.",
    price: 5.99,
    watched: false,
  },

  {
    id: 7,
    title: "🌪️ Avatar: The Last Airbender",
    description:
      "In a world divided into four nations—Water, Earth, Fire, and Air—each aligned with a specific elemental bending art, balance is shattered when the Fire Nation launches a ruthless war. The only hope lies in the Avatar: the one person capable of mastering all four elements and restoring harmony. Discovered frozen in ice, 12-year-old Aang—an Airbender and the last of his kind—awakens to find a world on the brink of destruction. Joined by his friends Katara and Sokka, Aang embarks on an epic journey to accept his destiny, confront powerful enemies, and bring peace to a world at war.",
    price: 6.99,
    watched: false,
  },

  {
    id: 8,
    title: "🕸️ The Amazing Spider-Man",
    description:
      "After the mysterious disappearance of his parents, teenage outcast Peter Parker is raised by his Uncle Ben and Aunt May. Struggling with identity and high school life, Peter's world changes forever when he’s bitten by a genetically altered spider. As he discovers his new powers, he uncovers secrets that lead him to Dr. Curt Connors—a scientist with dangerous ambitions. Caught between protecting the city and discovering the truth about his past, Peter must embrace his destiny as Spider-Man to stop a monstrous threat and become the hero he was meant to be.",
    price: 6.99,
    watched: false,
  },
];

let total = 0;
let selectedMovie = null;

const watchButtons = document.querySelectorAll(".watch-button");
const movieTitle = document.querySelector(".movie__title");
const movieDescription = document.querySelector(".movie__description");
const moviePrice = document.getElementById("price");
const buyButton = document.querySelector(".buy__button");
const totalPrice = document.getElementById("total");

// Add event listeners to each watch button
// Loop through each button and add a click event listener
// When a button is clicked, find the corresponding movie object
// Update the movie title, description, and price in the HTML

watchButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the movie ID from the data-id attribute
    const movieId = Number(this.getAttribute("data-id"));

    // Find the movie object by ID
    const movie = movies.find((movie) => movie.id === movieId);

    movieTitle.textContent = movie.title;
    movieDescription.textContent = movie.description;
    moviePrice.textContent = `$${movie.price}`;

    selectedMovie = Number(button.dataset.id);
  });
});

const buyMovie = function () {
  if (selectedMovie === null) {
    alert("Please select a movie to watch.");
  }

  const movie = movies.find((m) => m.id === selectedMovie);

  // checks that if the movie object was found in movies array.
  if (movie) {
    if (movie.watched) {
      alert("You have already watched this movie.");
      // this stops movie from being watched again
      return;
    }
  }

  movie.watched = true;
  total += movie.price;
  totalPrice.textContent = `Total spent: $${total.toFixed(2)}`;
};
