/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

// add the movies variables here ....
const movie1 = {
	id: 1,
	name: "Spider-man",
	image:
		"https://www.cnet.com/a/img/-E8L4Ahc9CSYCXJGL_i5hU2ezIs=/0x0:850x478/1200x675/2021/11/29/82fb5acc-9155-4844-be9c-e0831a6b837c/nowayhome.jpg",
	rating: 10,
};
const movie2 = {
	id: 2,
	name: "Hulk",
	image:
		"https://www.themoviedb.org/t/p/original/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
	rating: 6.7,
};
const movie3 = {
	id: 3,
	name: "Man of Steel",
	image:
		"https://i.pinimg.com/originals/61/b1/22/61b122e81b1946392ffc903cd098e439.jpg",
	rating: 8.9,
};

console.log(movie1);
console.log(movie2);
console.log(movie3);

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */

// const movies = [movie1, movie2, movie3];
const movies = [
	{
		id: 1,
		name: "Spider-man",
		image:
			"https://www.cnet.com/a/img/-E8L4Ahc9CSYCXJGL_i5hU2ezIs=/0x0:850x478/1200x675/2021/11/29/82fb5acc-9155-4844-be9c-e0831a6b837c/nowayhome.jpg",
		rating: 10,
	},
	{
		id: 2,
		name: "Hulk",
		image:
			"https://www.themoviedb.org/t/p/original/gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg",
		rating: 6.7,
	},
	{
		id: 3,
		name: "Man of Steel",
		image:
			"https://i.pinimg.com/originals/61/b1/22/61b122e81b1946392ffc903cd098e439.jpg",
		rating: 8.9,
	},
];

/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */
