# Nettie, A Networking Game

 This project is a gamification of concepts from the Networking I, II, III, & IV classes at Wayne Stat College.

 Check out the [current deployment!][Deployment]

---
## Outline

- [Nettie, A Networking Game](#nettie-a-networking-game)
	- [Outline](#outline)
		- [Concepts Covered](#concepts-covered)
		- [Minimum Viable Product](#minimum-viable-product)
		- [Assigned Tasks](#assigned-tasks)
		- [Hopes \& Dreams](#hopes--dreams)
		- [Further Documentation](#further-documentation)
			- [Commands](#commands)
			- [Dependencies](#dependencies)
			- [Visual Studio Code Extensions](#visual-studio-code-extensions)
			- [React Deployment With React Router](#react-deployment-with-react-router)

---

### Concepts Covered
<div name="concepts-covered"/>

This section outlines what concepts will be covered in this project.
- [ ] MAC Addresses
- [ ] IP Addresses
- [ ] Subnetting
- [ ] OSI Model
- [ ] Header Questions
- [ ] Command Questions
- [ ] ANDing
- [ ] Magic Number

...Others to come

---

### Minimum Viable Product
<div name="minimum-viable-product"/>

This section outlines what this website has to at least accomplish to provide use to visitors.

Users are able to:
- [ ] Set up a username and include their email
- [ ] Change their username and email
- [ ] Login with their email, but no password
- [ ] Display recently added concepts broken down by level
- [ ] Choose flashcards based on level, concept, and amount
- [ ] Choose different types of games based on level and concept
- [ ] Choose quizzes based on level and concept
- [X] Learn about this project in the About section
- [X] Learn who to contact for this project

---

### Assigned Tasks
<div name="assigned-tasks"/>

This section outlines what tasks have been assigned to members.

Thomas:
- [ ] Set up posting Registration data
- [ ] Design the front of games
- [ ] Create the Quizzes

Dakota:
- [ ] Set up Posting of Login data for registration
- [ ] MongoDB side of Login data
- [ ] Pseudo code for the game
- [ ] Pseudo code for the quiz

---

### Hopes & Dreams
<div name="hopes-dreams"/>

This section outlines what I hope to get to with this project.

- [X] Use an API to get the questions
- [ ] Use an API for Login and Registration
- [ ] Use a database to store user information and scores
- [ ] Use a database for the questions
- [ ] Display a scoreboard for each user
- [ ] Design an interface for faculty to add questions (Excel to CSV, or Python GUI Interface)

---

### Further Documentation
<div name="documentation"/>

This will include information about how I would like this project to look and perhaps some resources that helped me along the way.

#### Commands
<div name="commands"/>

This section outlines the commands I use to run this project.

- `npm install` - Installs the dependencies for this project.

- `npm start` - Runs the app in the development mode.

- `npm deploy` - Builds the app for production to the `build` folder. This updates the GitHub Pages deployment.

#### Dependencies
<div name="dependencies"/>

This section outlines the dependencies I use for this project and the command used to install them. They should also be included in the `package.json` file.

YOU DON'T NEED TO ENTER THESE COMMANDS. `npm install` should install them for you.

- `npm install react-router-dom` - Used for routing in React.

- `npm install react-icons` - Used for icons in React.

- `npm install gh-pages --save-dev` - Used for deployment to GitHub Pages.

- `npm install axios` - Used for API calls.

- `npm install express` - Used for API calls.

- `npm install --save-dev nodemon` - Used for API calls.

- `npm install mongoose` - Used for MongoDB database.

- `npm install dotenv` - Used for environment variables.

- `npm install @hapi/joi` - Used for validation.

- `npm install bcryptjs` - Used for hashing passwords.

- `npm install jsonwebtoken` - Used for authentication.

#### Visual Studio Code Extensions
<div name="vscode-extensions"/>

This section outlines the extensions I use for this project. These are very helpful for web-development.

- `ESLint` - Used for linting JavaScript.

- `Prettier` - Used for formatting Code.

- `Live Server` - Used for running a local server. Although isn't used with React

- `GitHub Copilot` - Used for code suggestions. This is a new feature that is still in beta. Can be free with a student email address [here][GitHubEducation].

- `Tabnine` - Used for code suggestions. This is a new feature that is still in beta. Free Alternative to GitHub Copilot.

- `GitLens` - Used for git information. 

- `GitHub Repositories` - Used for GitHub information. 

- `Indent Rainbow` - Used for indenting. 

- `Path Intellisense` - Used for path suggestions. 

- `ES7 React/Redux/GraphQL/React-Native snippets` - Used for React snippets. 

- `Code Spell Checker` - Used for spell checking. 

- `REST Client` - Used for testing API calls. 

- `Polacode` - Used for taking screenshots of code. 

- `Import Cost` - Used for seeing the size of imports. 

- `Highlight Matching Tag` - Used for highlighting matching tags. 

- `Auto Rename Tag` - Used for renaming matching tags. 

- `Auto Close Tag` - Used for closing matching tags. 

- `Advanced New File` - Used for creating new files. 

- `vscode-pets` - Used for a cute pet. 

- `WakaTime` - Used for tracking time spent on projects.

- `SynthWave '84` - Used for a cool theme.

- `Material Icon Theme` - Used for icons.


#### React Deployment With React Router
<div name="react-deployment"/>

This section outlines how I deployed this project to GitHub Pages.

- Create a new repository on GitHub.

- Create a new React project with `npx create-react-app <project-name>`.

- Set up GitHub Pages in the repository settings. Initial branch should be `main`.

- `npm install gh-pages --save-dev` - Install the `gh-pages` dependency.

- Add the following to the `package.json` file:

```json
"homepage": "https://<username>.github.io/<project-name>",
"scripts": {
	"predeploy": "npm run build",
	"deploy": "gh-pages -d build"
}
```

- `npm run deploy` - Build the project and deploy it to GitHub Pages.

- Change the `main` branch to `gh-pages` in the repository settings.

React alone should be working at this point

- `npm install react-router-dom` - Install the `react-router-dom` dependency.

- Make sure to import `HashRouter` instead of `BrowserRouter` or `Router` in `index.js`:

```js
import { HashRouter } from 'react-router-dom';
```

This will add a "#" to the URL. This is necessary for GitHub Pages to work with React Router.

[Deployment]: https://nottommy11.github.io/react-test-deploy
[GitHubEducation]: https://education.github.com/pack