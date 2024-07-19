# restaurant

### Purpose
 The purpose of this project is to dabble with **webpack**. Moreover, how webpack allows for modules to be accessed and updated in a new way. This method allows for much better organization than IIFEs.

### Challenges Faced
#### Webpack
- Learning webpack was a difficult curve, particularly all of the set up required. I managed to miss setting a template for the `HtmlWebpackPlugin` meaning the output in `/dist` did not reflect my `index.html` file in `/src`.

##### `csv-loader`
- I decided to challenge myself and store the info relevant to loading the page in a `.csv` file. While trying to interpret the file, I found that using the first row to name the members of each array did not work as intended; I would keep getting undefined values returned to me.
- Rather than using the `.` dot notation to access each column from a row, I decided to simply use the index location. This solution is less scalable however for the purpose of getting this project done I find it acceptable.

#### Modularity
- Organizing files into modules using `import` and `export` in tandem with webpack is not an entirely new experience, but reminds me to keep in mind the functionality of each file and its purpose so it can be built in such a way.
- Specifically, working with the DOM alongside modules and seeing the visual feedback on what happens when the content for a div is changed provides new insight on how these files interact.